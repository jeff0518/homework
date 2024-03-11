import { useState } from "react";

import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import Patient from "../components/patient/Patient";
import PreviewModal from "../components/patient/PreviewModal";
import { MedicalRecordProps } from "../context/recordFakeData";

function PatentPage() {
  const [imageFile, setImageFile] = useState<MedicalRecordProps>();

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
