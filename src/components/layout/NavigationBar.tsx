import { IoChevronBackSharp } from "react-icons/io5";
import { TbSend } from "react-icons/tb";

import style from "./NavigationBar.module.scss";

function NavigationBar() {
  return (
    <div className={style.navigation_container}>
      <div className={style.navigation_back}>
        <IoChevronBackSharp size={20} />
        <p>返回</p>
      </div>
      <div className={style.navigation_send}>
        <p>傳送</p>
        <TbSend size={20} />
      </div>
    </div>
  );
}
export default NavigationBar;
