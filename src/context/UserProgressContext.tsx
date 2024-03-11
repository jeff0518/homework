import { createContext, useState, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const UserProgressContext = createContext({
  progress: "",
  showPopup: () => {},
  hidePopup: () => {},
  showLogout: () => {},
  hideLogout: () => {},
  showPreview: () => {},
  hidePreview: () => {},
});

export function UserProgressContextProvider({ children }: ProviderProps) {
  const [userProgress, setUserProgress] = useState("");

  const showPopup = () => setUserProgress("Popup");
  const hidePopup = () => setUserProgress("");
  const showLogout = () => setUserProgress("Logout");
  const hideLogout = () => setUserProgress("");
  const showPreview = () => setUserProgress("Preview");
  const hidePreview = () => setUserProgress("");

  const userProgressCtx = {
    progress: userProgress,
    showPopup,
    hidePopup,
    showLogout,
    hideLogout,
    showPreview,
    hidePreview,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
