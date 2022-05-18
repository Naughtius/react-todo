import { FC } from "react";
import css from "./Input.module.scss";
import cn from "classnames";
import { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={cn(css.input, className)} {...props} />;
};

export default Input;
