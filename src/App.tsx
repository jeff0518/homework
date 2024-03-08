import { UserProgressContextProvider } from "./context/UserProgressContext";
// import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AddCase from "./components/case/AddCase";
// import PatentPage from "./pages/PatientPage";
import "../src/styles/globals.scss";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        {/* <LoginPage /> */}
        <MainPage />
        <AddCase />
        {/* <PatentPage /> */}
      </UserProgressContextProvider>
    </>
  );
}

export default App;
