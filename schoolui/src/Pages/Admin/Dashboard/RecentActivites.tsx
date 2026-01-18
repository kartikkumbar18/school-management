export const RecentActivities = () => {
    return (
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Recent Activities</h2>
  
        <ul className="space-y-4 text-sm">
          <li className="flex justify-between">
            <span>New student admitted</span>
            <span className="text-gray-400">2 mins ago</span>
          </li>
          <li className="flex justify-between">
            <span>Teacher profile updated</span>
            <span className="text-gray-400">1 hour ago</span>
          </li>
          <li className="flex justify-between">
            <span>Fees payment received</span>
            <span className="text-gray-400">Today</span>
          </li>
        </ul>
      </div>
    );
  };
  