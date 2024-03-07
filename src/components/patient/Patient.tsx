import { FaRegImage, FaCamera } from "react-icons/fa6";

import ButtonUI from "../UI/ButtonUI";
import style from "./Patient.module.scss";

function Patient() {
  return (
    <div className={style.patient_container}>
      <div className={style.patient_info}>
        <p>病例號： 20240307001</p>
        <p>姓名：Jeff</p>
        <p>性別：男</p>
      </div>
      <div className={style.patient_image}>圖片呈現區</div>
      <div className={style.patient_action}>
        <ButtonUI btnStyle="btn__pill">
          <p className={style.patient_action_text}>相簿</p>
          <FaRegImage size={25} />
        </ButtonUI>
        <ButtonUI btnStyle="btn__pill">
          <p className={style.patient_action_text}>拍照</p>
          <FaCamera size={25} />
        </ButtonUI>
      </div>
    </div>
  );
}
export default Patient;
