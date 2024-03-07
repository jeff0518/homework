import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import Patient from "../components/patient/Patient";

// import style from './PatentPage.module.scss'

function PatentPage() {
  return (
    <>
      <NavigationBar />
      <Patient />
      <Footer />
    </>
  );
}
export default PatentPage;
