import React from 'react';

const Api = ({ resultado }) => {

    //extraer datos
const {request, location, current, } = resultado;
    if(!request) return null;

    return ( 
        <table className="content-table__style">
        <tr>
          <td><img className='icons-style' src={current.weather_icons} /></td>
          <td>{location.name}</td>
          <td>{location.country}</td>
          <td>{current.temperature + '°'}</td>
          <td>{current.weather_descriptions}</td>
          <td>{current.humidity}</td>
        </tr>
      </table>
     );
}
 
export default Api;