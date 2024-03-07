import SearchCase from "../components/case/SearchCase";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DisplayCase from "../components/case/DisplayCase";

// import style from "./MainPage.module.scss";

function MainPage() {
  return (
    <>
      <Header />
      <SearchCase />
      <DisplayCase />
      <Footer />
    </>
  );
}
export default MainPage;
