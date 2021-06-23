
const cantidadDeGranosDeTrigo = (casilleros) =>{

let sumaTotal=0;

for (let index = 0; index < casilleros; index++) {
    sumaTotal = sumaTotal + Math.pow(2,index)
}

return(sumaTotal)
};

const granosToKilo = (granos) => {
    //asumamos que en un kilogramo (kg) hay 22 000 granos
    return(granos/20000)
}



const casilleros = 64;
const granos = cantidadDeGranosDeTrigo(casilleros);
const resultado = granosToKilo(granos);
console.log(resultado);