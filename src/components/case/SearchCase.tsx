import InputUI from "../UI/InputUI";
import ButtonUI from "../UI/ButtonUI";
import { FaSearch } from "react-icons/fa";

import style from "./SearchCase.module.scss";
function SearchCase() {
  return (
    <div className={style.searchCase_container}>
      <div className={style.optionContainer}>
        <div className={style.caseNumber}>
          <InputUI label="病例號" id="caseNumber" type="text" placeholder="" />
        </div>
        <div className={style.date}>
          <InputUI label="日期" id="date" type="date" placeholder="" />
        </div>
      </div>
      <div className={style.actions}>
        {/* <div className={style.actions_box}></div> */}
        <div className={style.actions_box}>
          <ButtonUI btnStyle="btn__text">手動建立</ButtonUI>
          <ButtonUI btnStyle="btn__pill">
            查詢
            <FaSearch size={20} />
          </ButtonUI>
        </div>
      </div>
    </div>
  );
}
export default SearchCase;
