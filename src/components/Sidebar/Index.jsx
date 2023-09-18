import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">Logo</div>
      <div className="nav">
        <div className="nav-item">
          <span className="mr-2">@</span>Services
        </div>
        <div className="nav-item">
          <span className="mr-2">@</span>Child Panels
        </div>
        <div className="nav-item box-border p-2 rounded-lg bg-[#1E232D] text-white hover:cursor-pointer">
          <span className="mr-2">@</span>Order History
        </div>
        <ul className="my-2">
          <li className="sub-nav-item">Subsription</li>
          <li className="sub-nav-item">Drip-feed</li>
          <li className="sub-nav-item">Refill</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
