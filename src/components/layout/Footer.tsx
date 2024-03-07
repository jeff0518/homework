import logo from "../../../public/logo.svg";

import style from "./Footer.module.scss";
function Footer() {
  return (
    <div className={style.Footer_container}>
      <img src={logo} alt="Vite logo" />
    </div>
  );
}
export default Footer;
