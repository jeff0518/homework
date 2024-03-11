import { useContext, useEffect, useState } from "react";

import { MedicalRecordProps } from "../../context/recordFakeData";
import { SearchType } from "./SearchCase";
import { RecordFakeDataContext } from "../../context/recordFakeData";
import TableHeaderItem from "./table/TableHeaderItem";
import TableRow from "./table/TableRow";
import { Alert } from "../utils/getSweetalert";
import style from "./DisplayCase.module.scss";

interface DisplayCaseProps {
  updated: boolean;
  search: SearchType;
}

function DisplayCase({ updated, search }: DisplayCaseProps) {
  const recordFakeCtx = useContext(RecordFakeDataContext);
  const [isSearch, setIsSearch] = useState(false);
  const [searchItems, setSearchItems] = useState<MedicalRecordProps[]>([]);

  useEffect(() => {}, [updated]);

  useEffect(() => {
    if (search.recordNumber) {
      const item = recordFakeCtx?.medicalRecords.find((item) => {
        return item.recordNumber === search.recordNumber;
      });
      if (item) {
        setSearchItems([item]);
        setIsSearch(true);
      } else {
        Alert.fire({
          icon: "error",
          title: "沒有這個病例號",
        });
      }
    } else if (search.checkupDate) {
      const item = recordFakeCtx?.medicalRecords.filter((item) => {
        return item.checkupDate === search.checkupDate;
      });
      if (item && item.length > 0) {
        setSearchItems(item);
        setIsSearch(true);
      } else {
        Alert.fire({
          icon: "error",
          title: "沒有這個時間建立的資料",
        });
      }
    }
  }, [recordFakeCtx?.medicalRecords, search.checkupDate, search.recordNumber]);

  return (
    <div className={style.tableContainer}>
      <table className={style.displayCase_container}>
        <thead className={style.sticky}>
          <tr className={style.table_header}>
            <TableHeaderItem name="" additionalStyle="table_cell_photo" />
            <TableHeaderItem name="病例號" />
            <TableHeaderItem additionalStyle="table_cell_text" name="姓名" />
            <TableHeaderItem name="檢查日期" />
            <TableHeaderItem name="檢查單號" />
          </tr>
        </thead>
        <tbody className={style.table_body}>
          {isSearch &&
            searchItems.map((item) => {
              return (
                <TableRow
                  key={item.recordNumber}
                  recordNumber={item.recordNumber}
                  name={item.name}
                  checkupDate={item.checkupDate}
                  checkupNumber={item.recordNumber}
                />
              );
            })}
          {!isSearch &&
            recordFakeCtx?.medicalRecords.map((item: MedicalRecordProps) => {
              return (
                <TableRow
                  key={item.recordNumber}
                  recordNumber={item.recordNumber}
                  name={item.name}
                  checkupDate={item.checkupDate}
                  checkupNumber={item.recordNumber}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default DisplayCase;
