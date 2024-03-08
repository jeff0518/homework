import { createContext, useState, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const UserProgressContext = createContext({
  progress: "",
  showPopup: () => {},
  hidePopup: () => {},
});

export function UserProgressContextProvider({ children }: ProviderProps) {
  const [userProgress, setUserProgress] = useState("");

  console.log("context有執行");
  const showPopup = () => setUserProgress("Popup");
  const hidePopup = () => setUserProgress("");

  const userProgressCtx = {
    progress: userProgress,
    showPopup,
    hidePopup,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
