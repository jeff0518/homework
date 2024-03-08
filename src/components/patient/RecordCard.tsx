import { BiTrashAlt } from "react-icons/bi";

import table from "../../assets/table.png";
import ButtonUI from "../UI/ButtonUI";
import style from "./RecordCard.module.scss";
function RecordCard() {
  return (
    <li className={style.recordCard_container}>
      <div className={style.image}>
        <img src={table} alt="123" />
        <div className={style.trash}>
          <ButtonUI btnStyle="btn__card">
            <BiTrashAlt size={30} />
          </ButtonUI>
        </div>
      </div>
    </li>
  );
}
export default RecordCard;
