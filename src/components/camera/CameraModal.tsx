import { useRef, useEffect, useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FaCamera } from "react-icons/fa6";

import Modal from "../UI/Modal";
import ButtonUI from "../UI/ButtonUI";
import UserProgressContext from "../../context/UserProgressContext";
import { MedicalRecordProps } from "../../context/recordFakeData";
import style from "./CameraModal.module.scss";

interface CameraModalProps {
  patient: MedicalRecordProps | undefined;
  setImageFile: (imageFile: MedicalRecordProps) => void;
  getUpdatedFileHandler: (imageData: string) => void;
}

function CameraModal({
  setImageFile,
  getUpdatedFileHandler,
}: CameraModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);
  const userProgressCtx = useContext(UserProgressContext);
  let updated;

  const getVideo = () => {
    //navigator這段是要求使用者的相機和麥克風權限。
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1440, height: 1080 },
      })
      .then((stream) => {
        //stream 使用者的相機影像
        const video = videoRef.current;
        if (!video) return;
        video.srcObject = stream; // 將相機影像設定到 video
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    const video = videoRef.current;
    const photo = photoRef.current;

    if (!photo || !video) return;

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext("2d");
    // 取得照片的 2D 繪圖 context
    ctx && ctx.drawImage(video, 0, 0, width, height);

    const photoData = photo.toDataURL("image/png");
    updated = getUpdatedFileHandler(photoData.toString());
  };

  const saveHandler = () => {
    setImageFile(updated!);
    userProgressCtx.hideCamera();
  };

  const closeCameraHandler = () => {
    userProgressCtx.hideCamera();
  };

  const closePhoto = () => {
    const photo = photoRef.current;
    if (!photo) return;
    const ctx = photo.getContext("2d");

    ctx && ctx.clearRect(0, 0, photo.width, photo.height);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);
  return (
    <Modal
      modalStyle="center-camera"
      open={userProgressCtx.progress === "Camera"}
      onClose={
        userProgressCtx.progress === "Camera" ? closeCameraHandler : () => {}
      }
    >
      <div className={style.cameraModal_container}>
        <div className={style.cameraModal_del}>
          <ButtonUI btnStyle="btn__card" onClick={closeCameraHandler}>
            <TiDeleteOutline size={30} />
          </ButtonUI>
        </div>
        <div className={style.cameraModal_video}>
          <video ref={videoRef}></video>
          <div className={style.video_btn}>
            <ButtonUI btnStyle="btn__camera" onClick={takePhoto}>
              <FaCamera size={30} />
            </ButtonUI>
          </div>
        </div>
        <div className={style.cameraModal_action}>
          <div className={style.action_image}>
            <canvas ref={photoRef}></canvas>
          </div>
          <div className={style.action_button}>
            <ButtonUI btnStyle="btn__pill" onClick={closePhoto}>
              清除
            </ButtonUI>
            <ButtonUI btnStyle="btn__pill" onClick={saveHandler}>
              儲存
            </ButtonUI>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default CameraModal;
