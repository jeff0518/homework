import { FormEvent, useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";

import Modal from "../UI/Modal";
import InputUI from "../UI/InputUI";
import ButtonUI from "../UI/ButtonUI";
import UserProgressContext from "../../context/UserProgressContext";
import style from "./AddCase.module.scss";

import { postMedicalRecord } from "../../services/patientAPI";
import { RecordFakeDataContext } from "../../context/recordFakeData";

interface AddCaseProps {
  updatedHandler: () => void;
}

function AddCase({ updatedHandler }: AddCaseProps) {
  const userProgressCtx = useContext(UserProgressContext);
  const recordFakeCtx = useContext(RecordFakeDataContext);

  const fakeData = recordFakeCtx?.medicalRecords;
  if (!fakeData) return;
  const fakeDataLength = fakeData.length - 1;
  const maxNumber = Number(fakeData[fakeDataLength].recordNumber);
  const recordNumber = String(maxNumber + 1).padStart(5, "0");

  const addMedicalRecord = (event: FormEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const fd = new FormData(formElement);

    const name = fd.get("name")?.toString();
    const gender = fd.get("gender")?.toString();
    const birthday = fd.get("birthday")?.toString();

    if (!name || !gender || !birthday) {
      return;
    } else {
      const response = postMedicalRecord({
        recordNumber,
        name,
        gender,
        birthday,
      });

      updatedHandler();
      recordFakeCtx?.addPatient(response);
      formElement.reset();
      userProgressCtx.hidePopup();
    }
  };

  const closePopupHandler = () => userProgressCtx.hidePopup();

  return (
    <Modal
      modalStyle="center"
      open={userProgressCtx.progress === "Popup"}
      onClose={
        userProgressCtx.progress === "Popup" ? closePopupHandler : () => {}
      }
    >
      <div className={style.addCase_container}>
        <div className={style.addCase_del}>
          <ButtonUI btnStyle="btn__card" onClick={closePopupHandler}>
            <TiDeleteOutline size={30} />
          </ButtonUI>
        </div>
        <form className={style.addCase_form} onSubmit={addMedicalRecord}>
          <div className={style.form_input}>
            <InputUI
              label="病歷號"
              id="caseNumber"
              type="text"
              placeholder={recordNumber}
              disabled
            />
            <InputUI
              label="姓名"
              id="name"
              type="text"
              placeholder="請輸入病患姓名"
            />
            <InputUI
              label="性別"
              id="gender"
              type="text"
              placeholder="請輸入病患性別"
            />
            <InputUI
              label="生日"
              id="birthday"
              type="date"
              placeholder="請輸入病患生日"
            />
          </div>
          <div className={style.form_button}>
            <ButtonUI btnStyle="btn__pill">拍照</ButtonUI>
          </div>
        </form>
      </div>
    </Modal>
  );
}
export default AddCase;
