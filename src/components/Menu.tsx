import { FC, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

type Props = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  compact?: boolean;
};

const Menu: FC<Props> = (props) => {
  const { children, href, icon, compact } = props;

  return (
    <li>
      <Link href={href} shallow>
        <span
          className={classNames(
            "flex gap-4 items-center h-8 w-full cursor-pointer text-slate-300 hover:text-slate-100 transition-all duration-300",
            compact ? "justify-center" : ""
          )}
        >
          <i className="bg-white bg-opacity-10 rounded-full w-6 h-6 flex justify-center items-center">{icon}</i>
          <span className={classNames("transition-all duration-300", compact ? "opacity-0 hidden" : "")}>{children}</span>
        </span>
      </Link>
    </li>
  );
};

export default Menu;
