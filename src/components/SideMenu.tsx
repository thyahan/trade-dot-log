import classNames from "classnames";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { VscNotebook } from "react-icons/vsc";
import Menu from "./Menu";
import useLocalStorage from "hooks/useLocalStorage";

const variants = {
  maximize: {
    width: "320px",
  },
  minimize: {
    width: "64px",
  },
};

type MenuItem = {
  key: string;
  label: ReactNode;
  href: string;
  icon: ReactNode;
};

const SideMenu = () => {
  const [stage, setStage] = useLocalStorage("side-menu", "maximize");

  const isMaximize = stage === "maximize";

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
    <motion.nav initial={false} animate={isMaximize ? "maximize" : "minimize"} variants={variants} className="h-full">
      <div className="h-full p-4 relative">
        <ul>
          {menus.map((menu) => (
            <Menu key={menu.key} href={menu.href} icon={menu.icon} minimize={!isMaximize}>
              {menu.label}
            </Menu>
          ))}
        </ul>

        <a className={classNames("w-full py-4 absolute bottom-0 left-0 right-0 cursor-pointer", isMaximize ? "text-right px-8" : "text-center")}>
          <span className="inline-block">
            <i
              className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-6 h-6"
              onClick={() => setStage(isMaximize ? "minimize" : "maximize")}
            >
              <BiChevronsRight className={classNames("text-base text-slate-200 transition-all duration-300", isMaximize ? "-rotate-180" : "")} />
            </i>
          </span>
        </a>
      </div>
    </motion.nav>
  );
};

export default SideMenu;
