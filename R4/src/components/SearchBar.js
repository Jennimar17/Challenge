import React, { Fragment, useState} from 'react';
import './SearchBarStyle.css';

const SearchBar = ({busqueda, guardarBusqueda, guardarConsulta}) => {



const [error, guardarError] = useState(false);

    //extraer ciudad
const { ciudad } = busqueda;

    //funcion coloca elements en el state
const handleChange = e => {
        //actualiza el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    });
}
    //cuando el usuario da submit al form
const handleSubmit = e => {
    e.preventDefault();
        //para validar
        if(ciudad.trim() === '') {
            guardarError(true);
                return;
            }
            guardarError(false);

        //pasarlo al comp principal
        guardarConsulta(true);
    }
  return (
    <Fragment>
       <form 
            onSubmit={handleSubmit}
            className='form-style'
      >
    {error ? <span className='alert'>¡Ingresa una Ciudad!</span> : null }
        <input 
            type="text" 
            name="ciudad" 
            id="ciudad"  
            value={ciudad}
            onChange={handleChange}
        />
        

        <input 
             type='submit'
             value='Buscar Ciudad'
             className='button-style'
        />  
      </form>
    </Fragment>
  );
};

 
export default SearchBar;
