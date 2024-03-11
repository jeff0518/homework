import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";

import UserProgressContext from "../../context/UserProgressContext";
import { PreviewContext } from "../../context/previewContext";
import Modal from "../UI/Modal";
import ButtonUI from "../UI/ButtonUI";
import style from "./PreviewModal.module.scss";

function PreviewModal() {
  const userProgressCtx = useContext(UserProgressContext);
  const previewCtx = useContext(PreviewContext);

  const closePreviewHandler = () => userProgressCtx.hidePreview();
  return (
    <Modal
      modalStyle="center-preview"
      open={userProgressCtx.progress === "Preview"}
      onClose={
        userProgressCtx.progress === "Preview" ? closePreviewHandler : () => {}
      }
    >
      <div className={style.previewModal_container}>
        <div className={style.previewModal_del}>
          <ButtonUI btnStyle="btn__card" onClick={closePreviewHandler}>
            <TiDeleteOutline size={30} />
          </ButtonUI>
        </div>
        <div className={style.previewModal_image}>
          <img src={previewCtx?.imagePreview} alt="預覽圖片" />
        </div>
      </div>
    </Modal>
  );
}
export default PreviewModal;
