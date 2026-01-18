interface Props {
    title: string;
    value: string;
  }
  
  export const StatsCard: React.FC<Props> = ({ title, value }) => {
    return (
      <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition">
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="mt-2 text-2xl font-bold text-black">{value}</h3>
        <div className="mt-3 h-1 w-full bg-yellow-500 rounded-full" />
      </div>
    );
  };
  