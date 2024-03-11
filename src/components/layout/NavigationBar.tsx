import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { TbSend } from "react-icons/tb";

import { RecordFakeDataContext } from "../../context/recordFakeData";
import { PreviewContext } from "../../context/previewContext";
import { MedicalRecordProps } from "../../context/recordFakeData";
import style from "./NavigationBar.module.scss";

interface NavigationProps {
  imageFile: MedicalRecordProps | undefined;
}

function NavigationBar({ imageFile }: NavigationProps) {
  const navigate = useNavigate();
  const recordFakeCtx = useContext(RecordFakeDataContext);
  const previewCtx = useContext(PreviewContext);

  const toBackHandler = () => {
    navigate(-1);
  };

  const toSendHandler = () => {
    imageFile && recordFakeCtx?.changePatient(imageFile);
    previewCtx?.deledImage;
    navigate("/main");
  };
  return (
    <div className={style.navigation_container}>
      <div className={style.navigation_back} onClick={toBackHandler}>
        <IoChevronBackSharp size={20} />
        <p>返回</p>
      </div>
      <div className={style.navigation_send} onClick={toSendHandler}>
        <p>傳送</p>
        <TbSend size={20} />
      </div>
    </div>
  );
}
export default NavigationBar;
