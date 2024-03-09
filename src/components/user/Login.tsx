import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

import LogoImage from "../layout/LogoImage";
import Form from "../UI/Form";
import InputUI from "../UI/InputUI";
import ButtonUI from "../UI/ButtonUI";
import style from "./Login.module.scss";

import { getLoginData } from "../../services/authAPI";

function Login() {
  const accountRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const navigate = useNavigate();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!accountRef.current || !passwordRef.current) {
      console.log("未補抓到accountRef或passwordRef");
    }
    const enterAccount = accountRef.current.value;
    const enterPassword = passwordRef.current.value;

    const result = getLoginData({ enterAccount, enterPassword });

    if (result) {
      console.log("登入成功");
      navigate("/main");
    } else {
      console.log("登入失敗");
    }
  };
  return (
    <div className={style.Login_container}>
      <div className={style.left}></div>
      <div className={style.right}>
        <LogoImage logoStyle="circle_login" />
        <Form formStyle="login" onSubmit={submitHandler}>
          <InputUI
            label="帳號"
            id="account"
            type="text"
            placeholder="請輸入帳號"
            inputRef={accountRef}
          />

          <InputUI
            label="密碼"
            id="password"
            type="password"
            placeholder="請輸入密碼"
            inputRef={passwordRef}
          />
          <div className={style.action}>
            <ButtonUI btnStyle="btn__pill">登入</ButtonUI>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;
