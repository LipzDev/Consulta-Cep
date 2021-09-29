import React from "react";
import * as Styles from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  title?: string;
  actived?: boolean;
};

const Button = ({
  children,
  disabled,
  onClick,
  title,
  actived,
}: ButtonProps) => {
  return (
    <Styles.Button
      onClick={onClick}
      title={title}
      disabled={disabled}
      actived={actived}
    >
      {children}
    </Styles.Button>
  );
};

export default Button;
