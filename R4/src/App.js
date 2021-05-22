import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Api from './components/Api';


import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {

   //statee
const [busqueda, guardarBusqueda] = useState({
  ciudad: ''
});

const [consultar, guardarConsulta] = useState(false);

const [resultado, guardarResultado] = useState({});

const { ciudad } = busqueda;

useEffect(() => {
  const consultarApi = async () => {

    if(consultar) {
      const url = `http://api.weatherstack.com/current?access_key=63b70d87292fe05d6282574056a5c865&units=m&query=${ciudad}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarResultado(resultado);
      guardarConsulta(false);
    }

  }
  consultarApi();
},[consultar]);
  
  return (
    <Fragment>
      <Header titulo="Weather-Tabla" />
      <SearchBar
        busqueda={busqueda}
        guardarBusqueda={guardarBusqueda} 
        guardarConsulta={guardarConsulta}     
      />
      <table className="title-table__style">
        <tr>
          <th></th>
          <th>Ciudad</th>
          <th>País</th>
          <th>Temp. Actual</th>
          <th>Tiempo</th>
          <th>Humidity</th>
        </tr>
      </table>

    <Api resultado={resultado} />
    </Fragment>
  );
}

export default App;
