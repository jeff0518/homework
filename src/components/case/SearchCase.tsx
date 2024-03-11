import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";

import InputUI from "../UI/InputUI";
import ButtonUI from "../UI/ButtonUI";
import UserProgressContext from "../../context/UserProgressContext";
import style from "./SearchCase.module.scss";

export interface SearchType {
  recordNumber: string;
  checkupDate: string;
}
interface SearchProps {
  setSearch: (item: SearchType) => void;
}

function SearchCase({ setSearch }: SearchProps) {
  const userProgressCtx = useContext(UserProgressContext);
  const [recordNumber, setRecordNumber] = useState("");
  const [checkupDate, setCheckupDate] = useState("");

  const showPopupHandler = () => userProgressCtx.showPopup();

  const searchHandler = () => {
    const updated = {
      recordNumber: recordNumber,
      checkupDate: checkupDate,
    };

    setSearch(updated);
    setCheckupDate("");
    setRecordNumber("");
  };

  return (
    <div className={style.searchCase_container}>
      <div className={style.optionContainer}>
        <div className={style.caseNumber}>
          <InputUI
            label="病例號"
            id="caseNumber"
            type="text"
            placeholder=""
            value={recordNumber}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRecordNumber(event.target.value)
            }
          />
        </div>
        <div className={style.date}>
          <InputUI
            label="日期"
            id="date"
            type="date"
            placeholder=""
            value={checkupDate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setCheckupDate(event.target.value)
            }
          />
        </div>
      </div>
      <div className={style.actions}>
        <div className={style.actions_box}>
          <ButtonUI btnStyle="btn__text" onClick={showPopupHandler}>
            手動建立
          </ButtonUI>
          <ButtonUI btnStyle="btn__pill" onClick={searchHandler}>
            查詢
            <FaSearch size={20} />
          </ButtonUI>
        </div>
      </div>
    </div>
  );
}
export default SearchCase;
