import { ReactNode } from "react";
import style from "./ButtonUI.module.scss";

interface ButtonProps {
  children: ReactNode;
  btnStyle: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}
function ButtonUI({ children, btnStyle, type, onClick }: ButtonProps) {
  return (
    <button type={type} className={style[btnStyle]} onClick={onClick}>
      {children}
    </button>
  );
}
export default ButtonUI;
