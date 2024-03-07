import TableHeaderItem from "./table/TableHeaderItem";
import TableRow from "./table/TableRow";
import style from "./DisplayCase.module.scss";

function DisplayCase() {
  return (
    <div className={style.tableContainer}>
      <table className={style.displayCase_container}>
        <thead className={style.sticky}>
          <tr className={style.table_header}>
            <TableHeaderItem name="" additionalStyle="table_cell_photo" />
            <TableHeaderItem name="病例號" />
            <TableHeaderItem name="姓名" />
            <TableHeaderItem name="檢查日期" />
            <TableHeaderItem name="檢查單號" />
          </tr>
        </thead>
        <tbody className={style.table_body}>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}
export default DisplayCase;
