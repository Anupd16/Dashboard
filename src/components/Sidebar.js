import React from "react";
import classNames from "classnames";
import { FcBullish } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/consts/navigation";
// If you have this kind of import

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="bg-neutral-950 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">OpenShop</span>
      </div>

      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLinks key={item.key} item={item} />
        ))}
      </div>

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLinks key={item.key} item={item} />
        ))}
        <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
          <span className="text-xl" aria-label="Logout">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

function SidebarLinks({ item }) {
  const { pathname } = useLocation();

  const activeClass =
    pathname === item.path ? "bg-neutral-700 text-white" : "text-neutral-400";
  const linkClass = classNames(activeClass, linkClasses);

  return (
    <Link to={item.path} className={linkClass}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
