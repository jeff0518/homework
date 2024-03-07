import style from "./Table.module.scss";

interface TableHeaderItemProps {
  name: string;
  additionalStyle?: string;
}
function TableHeaderItem({ name, additionalStyle }: TableHeaderItemProps) {
  return (
    <th
      className={`${style.table_cell} ${
        additionalStyle ? style[additionalStyle] : ""
      }`}
    >
      {name}
    </th>
  );
}
export default TableHeaderItem;
