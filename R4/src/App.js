import React, { Fragment } from "react";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header titulo="Weather-Tabla" />
      <table className="table-container">
        <tr>
          <th></th>
          <th>Ciudad</th>
          <th>Pais</th>
          <th>Temp. Actual</th>
          <th>Max.</th>
          <th>Min.</th>
        </tr>
        <tr>
          <td>
            <img src="./img/trending/trending_up_white_24dp.svg" alt="up" />
          </td>
          <td>
            <img class="crypto-icons" src="./img/cryptos/BTC.svg" alt="" />
            Bitcoin
          </td>
          <td>BTC</td>
          <td>$123,456,789</td>
          <td>$12,345</td>
          <td>$1,234</td>
        </tr>
      </table>
    </Fragment>
  );
}

export default App;
