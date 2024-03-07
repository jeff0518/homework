import logo from "../../../public/logo.svg";

import style from "./LogoImage.module.scss";

interface LogoProps {
  logoStyle: string;
}

function LogoImage({ logoStyle }: LogoProps) {
  return <img src={logo} alt="logo" className={style[logoStyle]} />;
}
export default LogoImage;
