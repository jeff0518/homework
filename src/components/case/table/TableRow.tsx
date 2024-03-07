import photo from "../../../../public/photoSystem.svg";
import style from "./Table.module.scss";

function TableRow() {
  return (
    <tr className={style.table_row}>
      <td className={style.table_cell}>
        <img src={photo} alt="logo" className={style.photo} />
      </td>
      <td className={style.table_cell}>2</td>
      <td className={style.table_cell}>3</td>
      <td className={style.table_cell}>4</td>
      <td className={style.table_cell}>5</td>
    </tr>
  );
}
export default TableRow;
