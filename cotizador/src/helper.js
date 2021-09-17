//obtiene la diferencia de anos
export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

//calcula el total a pagar segun la marca

export const calcularMarca = (marca) => {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
};


//Calcula el Tipo de Seguro

export const  obtenerPlan=(plan)=> {
    return(plan ==='basico')? 1.20 :1.50
}

//Muestra la Primera Letra Mayus

export const primeraMayus = (text)=> {
    return text.charAt(0).toUpperCase() + text.slice(1)

}