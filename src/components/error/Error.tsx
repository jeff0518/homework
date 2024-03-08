import { useNavigate } from "react-router-dom";

import ButtonUI from "../UI/ButtonUI";
import style from "./Error.module.scss";

function Error() {
  const navigate = useNavigate();

  const toLoginPageHandler = () => navigate("/");
  return (
    <div className={style.container}>
      <div>
        <h1>Oops!</h1>
        <p>抱歉！出現錯誤，請按下方按鈕回到登入頁面</p>
        <ButtonUI btnStyle="btn__text" onClick={toLoginPageHandler}>
          回到登入頁面
        </ButtonUI>
      </div>
    </div>
  );
}
export default Error;
