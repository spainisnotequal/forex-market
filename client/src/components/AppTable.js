import React from "react";
import { Table } from "reactstrap";

const AppTable = props => {
  const data = [
    {
      _id: "5e7b987b67432541c5111420",
      date: "2020-01-14T23:00:00.000Z",
      gold_price: 1556.09,
      silver_price: 17.98,
      __v: 0
    },
    {
      _id: "5e7b981167432541c511141f",
      date: "2020-01-13T23:00:00.000Z",
      gold_price: 1546.17,
      silver_price: 17.78,
      __v: 0
    },
    {
      _id: "5e7b97be67432541c511141e",
      date: "2020-01-12T23:00:00.000Z",
      gold_price: 1547.8,
      silver_price: 17.95,
      __v: 0
    }
  ];
  const rows = data.map(datum => {
    const { _id, date, gold_price, silver_price } = datum;
    return (
      <tr id={_id}>
        <th scope="row">{date}</th>
        <td>{gold_price}</td>
        <td>{silver_price}</td>
      </tr>
    );
  });

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Date (dd/mm/yyyy)</th>
          <th>Gold price ($)</th>
          <th>Silver price ($)</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default AppTable;
