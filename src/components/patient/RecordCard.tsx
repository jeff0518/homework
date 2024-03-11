import { useContext } from "react";
import { BiTrashAlt } from "react-icons/bi";

import { RecordFakeDataContext } from "../../context/recordFakeData";
import ButtonUI from "../UI/ButtonUI";
import style from "./RecordCard.module.scss";

interface RecordProps {
  imageId: string;
  imageUrl: string;
  recordNumber: string;
}
function RecordCard({ imageId, imageUrl, recordNumber }: RecordProps) {
  const recordFakeCtx = useContext(RecordFakeDataContext);

  const deledImageHandler = () => {
    recordFakeCtx?.deledPhoto({ recordNumber, imageId });
  };
  return (
    <li className={style.recordCard_container}>
      <div className={style.image}>
        <img src={imageUrl} alt="圖片" />
        <div className={style.trash}>
          <ButtonUI btnStyle="btn__card" onClick={deledImageHandler}>
            <BiTrashAlt size={30} />
          </ButtonUI>
        </div>
      </div>
    </li>
  );
}
export default RecordCard;
