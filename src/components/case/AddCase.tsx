import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";

import Modal from "../UI/Modal";
import InputUI from "../UI/InputUI";
import ButtonUI from "../UI/ButtonUI";
import UserProgressContext from "../../context/UserProgressContext";
import style from "./AddCase.module.scss";

function AddCase() {
  const userProgressCtx = useContext(UserProgressContext);

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
          <ButtonUI btnStyle="btn__card">
            <TiDeleteOutline size={30} />
          </ButtonUI>
        </div>
        <form className={style.addCase_form} onSubmit={() => {}}>
          <div className={style.form_input}>
            <InputUI
              label="病歷號"
              id="caseNumber"
              type="text"
              placeholder="之後會做直接生出病歷號"
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
              type="text"
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
