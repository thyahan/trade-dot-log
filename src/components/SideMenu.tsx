import classNames from "classnames";
import { ReactNode, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { VscNotebook } from "react-icons/vsc";
import Menu from "./Menu";

type MenuItem = {
  key: string;
  label: ReactNode;
  href: string;
  icon: ReactNode;
};

const SideMenu = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const menus: MenuItem[] = [
    {
      key: "Home",
      label: "Home",
      href: "/",
      icon: <AiOutlineHome />,
    },
    {
      key: "Form",
      label: "Form",
      href: "/form",
      icon: <VscNotebook />,
    },
  ];

  return (
    <div className={classNames(expand ? "w-80" : "w-16", "h-full p-4 relative transition-all duration-300")}>
      <ul>
        {menus.map((menu) => (
          <Menu key={menu.key} href={menu.href} icon={menu.icon} compact={!expand}>
            {menu.label}
          </Menu>
        ))}
      </ul>

      <a className={classNames("w-full py-4 absolute bottom-0 left-0 right-0 cursor-pointer", expand ? "text-right px-8" : "text-center")}>
        <span className="inline-block">
          <i className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-6 h-6">
            <BiChevronsRight
              className={classNames("text-base text-slate-200 transition-all duration-300", expand ? "-rotate-180" : "")}
              onClick={() => setExpand((prev) => !prev)}
            />
          </i>
        </span>
      </a>
    </div>
  );
};

export default SideMenu;
