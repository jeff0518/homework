import { useContext } from "react";
import { FaUser } from "react-icons/fa";

import ButtonUI from "../UI/ButtonUI";
import LogoImage from "./LogoImage";
import UserProgressContext from "../../context/UserProgressContext";
import style from "./Header.module.scss";

function Header() {
  const userProgressCtx = useContext(UserProgressContext);

  const showLogoutHandler = () => userProgressCtx.showLogout();
  return (
    <div className={style.header_container}>
      <div className={style.title}>
        <div className={style.title_img}>
          <LogoImage logoStyle="circle_header" />
        </div>
        <p className={style.text}>傷口照護紀錄</p>
      </div>
      <div className={style.user}>
        <ButtonUI btnStyle="btn__user" onClick={showLogoutHandler}>
          <FaUser size={20} />
          <span className={style.user_title}>User</span>
        </ButtonUI>
      </div>
    </div>
  );
}
export default Header;
