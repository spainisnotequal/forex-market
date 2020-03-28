import React from "react";
import { Table } from "reactstrap";
import moment from "moment";

const AppTable = props => {
  const dataKeys = ["Date (dd/mm/yyyy)", "Gold price ($)", "Silver price ($)"];
  const headerElements = dataKeys.map(element => <th>{element}</th>);
  const header = <tr>{headerElements}</tr>;

  const rows = props.data.map(datum => {
    const { _id, date, gold_price, silver_price } = datum;

    return (
      <tr id={_id}>
        <th scope="row">{moment(date).format("DD/MM/YYYY")}</th>
        <td>{gold_price}</td>
        <td>{silver_price}</td>
      </tr>
    );
  });

  return (
    <Table bordered hover>
      <thead>{header}</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default AppTable;
