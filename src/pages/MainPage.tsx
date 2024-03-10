import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { Alert } from "../components/utils/getSweetalert";
import { useCheckLogin } from "../components/utils/checkLogin";
import SearchCase from "../components/case/SearchCase";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DisplayCase from "../components/case/DisplayCase";
import AddCase from "../components/case/AddCase";
import Logout from "../components/user/Logout";

function MainPage() {
  const checkLogin = useCheckLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin) {
      navigate("/");
    }
  }, [checkLogin, navigate]);
  return (
    <>
      <Header />
      <SearchCase />
      <DisplayCase />
      <AddCase />
      <Logout />
      <Footer />
    </>
  );
}
export default MainPage;
