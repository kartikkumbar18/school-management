import React from "react";

const CenteredImageLayout = ({ imageUrl = "https://via.placeholder.com/300x400", altText = "Placeholder" }) => {
  return (
    <div className="flex h-screen">
      {/* Fixed image on the left side */}
      <div className="w-1/3 h-full flex-shrink-0">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-fill fixed"
        />
      </div>
      {/* Empty space on the right side */}
      <div className="flex-1"></div>
    </div>
  );
};

export default CenteredImageLayout;

