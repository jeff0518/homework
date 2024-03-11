import { useState } from "react";

import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import Patient from "../components/patient/Patient";
import { MedicalRecordProps } from "../context/recordFakeData";

// import style from './PatentPage.module.scss'

function PatentPage() {
  const [imageFile, setImageFile] = useState<MedicalRecordProps>();

  return (
    <>
      <NavigationBar imageFile={imageFile} />
      <Patient setImageFile={setImageFile} />
      <Footer />
    </>
  );
}
export default PatentPage;
