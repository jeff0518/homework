import { useNavigate } from "react-router-dom";

import photo from "../../../assets/photoSystem.svg";
import style from "./Table.module.scss";

function TableRow() {
  const navigate = useNavigate();

  const toPatientHandler = () => {
    navigate("/patient");
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
      <td className={style.table_cell}>2</td>
      <td className={style.table_cell}>3</td>
      <td className={style.table_cell}>4</td>
      <td className={style.table_cell}>5</td>
    </tr>
  );
}
export default TableRow;
