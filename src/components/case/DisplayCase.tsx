import TableHeaderItem from "./table/TableHeaderItem";
import TableRow from "./table/TableRow";
import style from "./DisplayCase.module.scss";

export interface MedicalRecordProps {
  recordNumber: string;
  name: string;
  gender: string;
  birthday: string;
  checkupDate: string;
  checkupNumber: string;
  photos: string[];
}

interface DisplayProps {
  medicalRecords: MedicalRecordProps[];
}

function DisplayCase({ medicalRecords }: DisplayProps) {
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
          {medicalRecords.map((item: MedicalRecordProps) => {
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
