import { Alert } from "./getSweetalert";

export function useCheckLogin() {
  const storedUser = localStorage.getItem("account");

  if (!storedUser) {
    Alert.fire({
      icon: "error",
      title: "請重新登入！",
    });
  }

  return storedUser;
}
