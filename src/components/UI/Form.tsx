import { ReactNode, FormEvent } from "react";
import style from "./Form.module.scss";

interface FormProps {
  children: ReactNode;
  formStyle: string;
  onSubmit: (event: FormEvent) => void;
}
function Form({ children, formStyle, onSubmit }: FormProps) {
  return (
    <form className={`${style.form} ${style[formStyle]}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
export default Form;
