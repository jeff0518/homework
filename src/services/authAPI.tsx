import fakeData from "../data/fakeData.json";

interface LoginProps {
  enterAccount: string;
  enterPassword: string;
}

export function getLoginData({ enterAccount, enterPassword }: LoginProps) {
  const userData = fakeData.users.find((item) => {
    return item.account === enterAccount && item.password === enterPassword;
  });

  if (userData) {
    return { message: "登入成功" };
  }
}
