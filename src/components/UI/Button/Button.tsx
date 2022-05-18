import { FC } from "react";
import css from "./Button.module.scss";
import cn from "classnames";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  outline,
  ...props
}) => {
  return (
    <button
      className={cn(
        css.button,
        className,
        css[`_${variant}`],
        outline && css._outline
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
