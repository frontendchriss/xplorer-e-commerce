import React from "react";
import { SidebarData } from "./sidebarData";
import Subheading from "./subheading";

const Sidebar = () => {
  return (
    <div className="w-64 rounded-md flex flex-col h-screen bg-slate-300">
      <Subheading />
      <ul class="space-y-2 items-center">
        {SidebarData.map((val, key) => {
          return (
            <div
              key={key}
              className="flex px-4 p-4 items-center hover:bg-gray-700 cursor-pointer rounded-lg text-lg"
            >
              <div className="w-6 h-5 mr-2">{val.icon}</div>
              <>{val.title}</>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
