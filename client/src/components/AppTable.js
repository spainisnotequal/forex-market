import React from "react";
import { Table } from "reactstrap";

const AppTable = props => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Date (dd/mm/yyyy)</th>
          <th>Gold price ($)</th>
          <th>Silver price ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">09/01/2020</th>
          <td>1500</td>
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">10/01/2020</th>
          <td>1600</td>
          <td>16</td>
        </tr>
        <tr>
          <th scope="row">11/01/2020</th>
          <td>1700</td>
          <td>17</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AppTable;
