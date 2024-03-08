import { useContext } from "react";
import { TbLogin } from "react-icons/tb";

import Modal from "../UI/Modal";
import UserProgressContext from "../../context/UserProgressContext";
import ButtonUI from "../UI/ButtonUI";
import style from "./Logout.module.scss";

function Logout() {
  const userProgressCtx = useContext(UserProgressContext);

  const closeLogoutHandler = () => userProgressCtx.hideLogout();

  return (
    <Modal
      modalStyle="right-top"
      open={userProgressCtx.progress === "Logout"}
      onClose={
        userProgressCtx.progress === "Logout" ? closeLogoutHandler : () => {}
      }
    >
      <div className={style.logout_container}>
        <div className={style.logout_box}>
          <div className={style.info}>使用者:Jeff</div>
          <div className={style.line}></div>
          <div className={style.action}>
            <ButtonUI btnStyle="btn__logout">
              <TbLogin size={28} />
              <span className={style.action_text}>登出</span>
            </ButtonUI>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default Logout;
