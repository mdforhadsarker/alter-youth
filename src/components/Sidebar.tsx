import React from "react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <div
      className={`fixed inset-0 z-[1001] bg-black bg-opacity-30 transition-opacity duration-500 ease-in-out ${
        isOpen ? "transform-none" : "-translate-x-full"
      }`}
      onClick={closeSidebar}
    >
      <div
        className={`fixed left-0 top-0 w-[250px] h-full bg-white p-4 z-[1002] transition-transform duration-500 ease-in-out ${
          isOpen ? "transform-none" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <a href="/">Home</a>
          </li>
          <li className="mb-2">
            <a href="/about">About</a>
          </li>
          <li className="mb-2">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
