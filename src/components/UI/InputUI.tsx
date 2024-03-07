import style from "./InputUI.module.scss";

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}
function InputUI({ label, id, type, placeholder }: InputProps) {
  return (
    <div className={style.input_container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} placeholder={placeholder} required />
    </div>
  );
}
export default InputUI;
