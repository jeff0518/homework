import fakeData from "../data/fakeData.json";

interface APIProps {
  recordNumber: string;
  name: string;
  gender: string;
  birthday: string;
}

export function getMedicalRecord() {
  return fakeData.medicalRecords;
}

export function postMedicalRecord({
  recordNumber,
  name,
  gender,
  birthday,
}: APIProps) {
  const checkupDate = new Date().toLocaleDateString("zh-Tw").toString();

  const checkupNumber = checkupDate.replace(/\D/g, "");

  const newRecords = {
    recordNumber,
    name,
    gender,
    birthday,
    checkupDate: checkupDate,
    checkupNumber: checkupNumber,
    photos: [],
  };

  const medicalRecords = [...fakeData.medicalRecords, newRecords];

  return medicalRecords;
}
