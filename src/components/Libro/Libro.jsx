import React, { useState } from "react";
import './Libro.css';
import styled from 'styled-components';

const Libro = ({ libro }) => {

    const Titulo = styled.h2`
        display: block;
        padding: 0;
        margin: 0;
        flex-basis: 100%;
    `

    const [miClase, setMiClase] = useState('default');

    return (
        <>
            <div className={'card col-md-3 ' + miClase}>
                <div class="card-body">
                    <h5 class="card-title">{libro.titulo}</h5>
                    <p class="card-text">Publicado en {libro.publicado}</p>
                    <button className="btn btn-primary" onClick={ () => {setMiClase('seleccionado')} }>Seleccionar</button>
                </div>
            </div>
        </>
    )

};

export default Libro;