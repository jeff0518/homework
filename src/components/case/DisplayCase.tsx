import { useContext, useEffect } from "react";

import { MedicalRecordProps } from "../../context/recordFakeData";
import { RecordFakeDataContext } from "../../context/recordFakeData";
import TableHeaderItem from "./table/TableHeaderItem";
import TableRow from "./table/TableRow";
import style from "./DisplayCase.module.scss";

interface DisplayCaseProps {
  updated: boolean;
}

function DisplayCase({ updated }: DisplayCaseProps) {
  const recordFakeCtx = useContext(RecordFakeDataContext);

  useEffect(() => {}, [updated]);

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
          {recordFakeCtx?.medicalRecords.map((item: MedicalRecordProps) => {
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
