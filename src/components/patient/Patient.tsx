import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FaRegImage, FaCamera } from "react-icons/fa6";

import RecordCard from "./RecordCard";
import ButtonUI from "../UI/ButtonUI";
import style from "./Patient.module.scss";

import { RecordFakeDataContext } from "../../context/recordFakeData";

function Patient() {
  const recordFakeCtx = useContext(RecordFakeDataContext);
  const { recordNumber } = useParams();

  const patient = recordFakeCtx?.medicalRecords.find((item) => {
    if (item.recordNumber === recordNumber) {
      return item;
    }
  });
  return (
    <div className={style.patient_container}>
      <div className={style.patient_info}>
        <p>病例號： {patient?.recordNumber}</p>
        <p>姓名：{patient?.name}</p>
        <p>性別: {patient?.gender}</p>
      </div>
      <ul className={style.patient_image}>
        {patient &&
          patient.photos.map((img) => {
            return (
              <RecordCard
                key={img.id}
                recordNumber={patient.recordNumber}
                imageId={img.id}
                imageUrl={img.image}
              />
            );
          })}
      </ul>
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
