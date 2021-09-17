import React from "react";
import styled from '@emotion/styled';
import { primeraMayus } from "../helper";
import PropTypes from 'prop-types';
const ContenedorResumen = styled.div `
padding: 1rem;
text-align:center;
background-color: #00838f;
color:#fff;
margin-top:1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ContenedorResumen >
      <h2>Resumen de Cotizacion</h2>

      <ul>
        <li>Marca:{primeraMayus(marca)}</li>
        <li>Plan:{primeraMayus(plan)}</li>
        <li>Year:{primeraMayus(year)}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.porpTypes ={
    datos:PropTypes.object.isRequired
}

export default Resumen;
