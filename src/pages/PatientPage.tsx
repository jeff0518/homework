import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCheckLogin } from "../components/utils/checkLogin";
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import Patient from "../components/patient/Patient";
import PreviewModal from "../components/patient/PreviewModal";
import { MedicalRecordProps } from "../context/recordFakeData";

function PatentPage() {
  const [imageFile, setImageFile] = useState<MedicalRecordProps>();
  const checkLogin = useCheckLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin) {
      navigate("/");
    }
  }, [checkLogin, navigate]);

  return (
    <>
      <NavigationBar imageFile={imageFile} />
      <PreviewModal />
      <Patient setImageFile={setImageFile} />
      <Footer />
    </>
  );
}
export default PatentPage;
