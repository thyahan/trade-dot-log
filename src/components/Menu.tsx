import { FC, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

type Props = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  minimize?: boolean;
};

const Menu: FC<Props> = (props) => {
  const { children, href, icon, minimize } = props;

  return (
    <li>
      <Link href={href} shallow>
        <span
          className={classNames(
            "flex gap-4 items-center h-8 w-full cursor-pointer text-slate-300 hover:text-slate-100 transition-all duration-300",
            minimize ? "justify-center" : ""
          )}
        >
          <i className="bg-white bg-opacity-10 rounded-full w-6 h-6 flex justify-center items-center">{icon}</i>
          {!minimize && children}
        </span>
      </Link>
    </li>
  );
};

export default Menu;
