import React from "react";
import { Table } from "reactstrap";
import moment from "moment";

const SilverPriceTable = props => {
  const dataKeys = ["Date (dd/mm/yyyy)", "Silver price ($)"];
  const headerElements = dataKeys.map(element => <th>{element}</th>);
  const header = <tr>{headerElements}</tr>;

  const rows = props.data.map(datum => {
    const { _id, date, silver_price } = datum;

    return (
      <tr id={_id}>
        <th scope="row">{moment(date).format("DD/MM/YYYY")}</th>
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

export default SilverPriceTable;
