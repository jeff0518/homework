import { useNavigate } from "react-router-dom";

import photo from "../../../assets/photoSystem.svg";
import style from "./Table.module.scss";

interface TableRowProps {
  recordNumber: string;
  name: string;
  checkupDate: string;
  checkupNumber: string;
}

function TableRow({
  recordNumber,
  name,
  checkupDate,
  checkupNumber,
}: TableRowProps) {
  const navigate = useNavigate();

  const toPatientHandler = () => {
    console.log(recordNumber);
    navigate(`/patient/${recordNumber}`);
  };
  return (
    <tr className={style.table_row}>
      <td className={style.table_cell}>
        <img
          src={photo}
          alt="logo"
          className={style.photo}
          onClick={toPatientHandler}
        />
      </td>
      <td className={style.table_cell}>{recordNumber}</td>
      <td className={style.table_cell}>{name}</td>
      <td className={style.table_cell}>{checkupDate}</td>
      <td className={style.table_cell}>{checkupNumber}</td>
    </tr>
  );
}
export default TableRow;
