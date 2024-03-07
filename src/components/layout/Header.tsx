import { FaUser } from "react-icons/fa";

import ButtonUI from "../UI/ButtonUI";
import LogoImage from "./LogoImage";
import style from "./Header.module.scss";
function Header() {
  return (
    <div className={style.header_container}>
      <div className={style.title}>
        <LogoImage logoStyle="circle_header" />
        <p>傷口照護紀錄</p>
      </div>
      <div className={style.user}>
        <ButtonUI btnStyle="btn__user">
          <FaUser size={20} />
          User
        </ButtonUI>
      </div>
    </div>
  );
}
export default Header;