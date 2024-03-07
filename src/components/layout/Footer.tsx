import LogoImage from "./LogoImage";

import style from "./Footer.module.scss";
function Footer() {
  return (
    <div className={style.Footer_container}>
      <LogoImage logoStyle="footer" />
    </div>
  );
}
export default Footer;
