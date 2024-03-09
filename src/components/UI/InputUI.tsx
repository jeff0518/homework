import style from "./InputUI.module.scss";

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  [key: string]: unknown;
  inputRef?: React.RefObject<HTMLInputElement>;
}

function InputUI({
  label,
  id,
  type,
  placeholder,
  inputRef,
  ...props
}: InputProps) {
  return (
    <div className={style.input_container}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        {...props}
        required
      />
    </div>
  );
}
export default InputUI;
