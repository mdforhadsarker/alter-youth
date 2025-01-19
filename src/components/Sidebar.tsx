import Link from "next/link";
import { useRouter } from "next/router"; 
import React from "react";
import { AiFillHome, AiOutlineQuestionCircle } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosPaper, IoIosLogIn } from "react-icons/io";
import { MdContactPhone, MdSchool, MdAppSettingsAlt } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const menuItems = [
  { href: "/", icon: AiFillHome, label: "Home" },
  {
    href: "/how-it-works",
    icon: AiOutlineQuestionCircle,
    label: "How it works",
  },
  { href: "/about", icon: IoIosPaper, label: "About" },
  { href: "/collaborate", icon: FaHandsHelping, label: "Collaborate" },
  { href: "/scholarships", icon: MdSchool, label: "Scholarships" },
  { href: "/policy", icon: IoIosPaper, label: "Scholarship Policy" },
  { href: "/contact", icon: MdContactPhone, label: "Get in touch" },
  { href: "/get-the-app", icon: MdAppSettingsAlt, label: "Get the app" },
  { href: "/login", icon: IoIosLogIn, label: "Log in" },
];

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const router = useRouter(); 

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeSidebar}
    >
      <div
        className={`fixed left-0 top-0 h-full bg-white p-10 z-[1002] transition-transform duration-500 ease-in-out ${
          isOpen ? "transform-none" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="space-y-2">
          {menuItems.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors font-medium text-sm ${
                  router.pathname === href
                    ? "bg-green-200 text-green-500 font-medium"
                    : "text-gray-500 hover:text-green-500"
                }`}
                onClick={closeSidebar}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
