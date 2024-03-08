import SearchCase from "../components/case/SearchCase";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DisplayCase from "../components/case/DisplayCase";
import AddCase from "../components/case/AddCase";
import Logout from "../components/user/Logout";

function MainPage() {
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
