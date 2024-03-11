import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCheckLogin } from "../components/utils/checkLogin";
import SearchCase from "../components/case/SearchCase";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DisplayCase from "../components/case/DisplayCase";
import AddCase from "../components/case/AddCase";
import Logout from "../components/user/Logout";

const defaultValue = {
  recordNumber: "",
  checkupDate: "",
};

function MainPage() {
  const [updated, setUpdated] = useState(false);
  const [search, setSearch] = useState(defaultValue);
  const checkLogin = useCheckLogin();
  const navigate = useNavigate();

  const updatedHandler = () => {
    setUpdated((prev) => !prev);
  };

  useEffect(() => {
    if (!checkLogin) {
      navigate("/");
    }
  }, [checkLogin, navigate]);
  return (
    <>
      <Header />
      <SearchCase setSearch={setSearch} />
      <DisplayCase search={search} updated={updated} />
      <AddCase updatedHandler={updatedHandler} />
      <Logout />
      <Footer />
    </>
  );
}
export default MainPage;
