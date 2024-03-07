import LogoImage from "../layout/LogoImage";
import Form from "../UI/Form";
import InputUI from "../UI/InputUI";
import ButtonUI from "../UI/ButtonUI";

import style from "./Login.module.scss";
function Login() {
  return (
    <div className={style.Login_container}>
      <div className={style.left}></div>
      <div className={style.right}>
        <LogoImage logoStyle="circle" />
        <Form formStyle="login" onSubmit={() => {}}>
          <div className={style.border}>
            <InputUI
              label="帳號"
              id="account"
              type="text"
              placeholder="請輸入帳號"
            />
          </div>
          <div className={style.border}>
            <InputUI
              label="密碼"
              id="password"
              type="password"
              placeholder="請輸入密碼"
            />
          </div>

          <ButtonUI btnStyle="btn__pill">登入</ButtonUI>
        </Form>
      </div>
    </div>
  );
}
export default Login;
