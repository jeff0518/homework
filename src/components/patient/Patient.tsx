import { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaRegImage, FaCamera } from "react-icons/fa6";

import RecordCard from "./RecordCard";
import ButtonUI from "../UI/ButtonUI";
import style from "./Patient.module.scss";

import UserProgressContext from "../../context/UserProgressContext";
import { RecordFakeDataContext } from "../../context/recordFakeData";
import { PreviewContext } from "../../context/previewContext";
import { MedicalRecordProps } from "../../context/recordFakeData";
import CameraModal from "../camera/CameraModal";

interface PatientProps {
  setImageFile: (imageFile: MedicalRecordProps) => void;
}

function Patient({ setImageFile }: PatientProps) {
  const userProgressCtx = useContext(UserProgressContext);
  const recordFakeCtx = useContext(RecordFakeDataContext);
  const previewCtx = useContext(PreviewContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { recordNumber } = useParams();

  console.log(userProgressCtx.progress);

  const patient = recordFakeCtx?.medicalRecords.find((item) => {
    if (item.recordNumber === recordNumber) {
      return item;
    }
  });

  const getImageIdHandler = () => {
    let lastImageId = 0;
    if (patient && patient.photos.length > 0) {
      lastImageId = Number(patient?.photos[patient.photos.length - 1].id);
    }
    const newImageId = String(lastImageId + 1).padStart(3, "0");

    return newImageId;
  };

  const getUpdatedFileHandler = (imageData: string) => {
    if (!patient) return;
    const newImageId = getImageIdHandler();
    const newPhoto = {
      id: newImageId,
      image: imageData,
    };
    const updated = {
      ...patient,
      photos: [...patient.photos, newPhoto],
    };

    return updated;
  };

  const getImageFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = (e) => {
        const imageData = e.target ? e.target.result : null;
        if (imageData && patient) {
          const updated = getUpdatedFileHandler(imageData.toString());

          previewCtx?.addImage(imageData.toString());
          console.log(updated);
          setImageFile(updated!);
          userProgressCtx.showPreview();
        }
      };
    }
  };

  const inputRefHandler = () => {
    if (!inputRef.current) {
      return;
    } else {
      inputRef.current.click();
    }
  };

  const showCameraModalHandler = () => {
    userProgressCtx.showCamera();
  };
  return (
    <>
      <CameraModal
        getUpdatedFileHandler={getUpdatedFileHandler}
        patient={patient}
        setImageFile={setImageFile}
      />
      <div className={style.patient_container}>
        <div className={style.patient_info}>
          <p>病例號： {patient?.recordNumber}</p>
          <p>姓名：{patient?.name}</p>
          <p>性別: {patient?.gender}</p>
        </div>
        <ul className={style.patient_image}>
          {patient && patient.photos.length > 0 ? (
            patient.photos.map((img) => {
              return (
                <RecordCard
                  key={img.id}
                  recordNumber={patient.recordNumber}
                  imageId={img.id}
                  imageUrl={img.image}
                />
              );
            })
          ) : (
            <li className={style.patient_image_text}>還沒有照片！</li>
          )}
        </ul>
        <div className={style.patient_action}>
          <input
            ref={inputRef}
            className={style.patient_action_input}
            type="file"
            name="file"
            accept="image/*"
            onChange={getImageFileHandler}
          />
          <ButtonUI btnStyle="btn__pill" onClick={inputRefHandler}>
            <p className={style.patient_action_text}>相簿</p>
            <FaRegImage size={25} />
          </ButtonUI>
          <ButtonUI btnStyle="btn__pill" onClick={showCameraModalHandler}>
            <p className={style.patient_action_text}>拍照</p>
            <FaCamera size={25} />
          </ButtonUI>
        </div>
      </div>
    </>
  );
}
export default Patient;
