import React from "react";
import { X } from "lucide-react";

interface SimplePopupProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSubmit?: () => void;
  submitText?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export const Popup: React.FC<SimplePopupProps> = ({
  isOpen,
  title,
  onClose,
  onSubmit,
  submitText = "Submit",
  loading = false,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Popup Box */}
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-black to-yellow-600 px-6 py-4 text-white">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          {onSubmit && (
            <button
              onClick={onSubmit}
              disabled={loading}
              className="rounded-lg bg-gradient-to-r from-black to-yellow-600 px-6 py-2 font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Processing..." : submitText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
