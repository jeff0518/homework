import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { TbSend } from "react-icons/tb";

import style from "./NavigationBar.module.scss";

function NavigationBar() {
  const navigate = useNavigate();

  const toBackHandler = () => {
    navigate(-1);
  };

  const toSendHandler = () => {
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
