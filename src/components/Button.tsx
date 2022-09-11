import classNames from "classnames";
import { FC, ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  return <button {...props} className={classNames("button", props.className)} />;
};

export default Button;
