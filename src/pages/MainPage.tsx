import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCheckLogin } from "../components/utils/checkLogin";
import { MedicalRecordProps } from "../components/case/DisplayCase";
import { getMedicalRecord } from "../services/patientAPI";
import SearchCase from "../components/case/SearchCase";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DisplayCase from "../components/case/DisplayCase";
import AddCase from "../components/case/AddCase";
import Logout from "../components/user/Logout";

function MainPage() {
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecordProps[]>(
    []
  );
  const checkLogin = useCheckLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin) {
      navigate("/");
    }
  }, [checkLogin, navigate]);

  useEffect(() => {
    const data = getMedicalRecord();
    if (data) {
      setMedicalRecords(data);
    }
  }, [medicalRecords]);
  return (
    <>
      <Header />
      <SearchCase />
      <DisplayCase medicalRecords={medicalRecords} />
      <AddCase setMedicalRecords={setMedicalRecords} />
      <Logout />
      <Footer />
    </>
  );
}
export default MainPage;
