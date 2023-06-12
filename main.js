



function filtrarCervezasPorAlcohol(cervezas, nivelAlcohol) {
    const cervezasFitradasPorNivelAlcohol = cervezas.filter(cerveza => cerveza.abv <= nivelAlcohol);
    const cervezasFitradas = cervezasFitradasPorNivelAlcohol.map(objeto => {
    return {
      nombre: objeto.name,
      abv: objeto.abv,
      ibu: objeto.ibu
    };
  });
  return cervezasFitradas
}
const nivelAlcohol = 7
const cervezasFitradas = filtrarCervezasPorAlcohol(beers, nivelAlcohol)
console.log(cervezasFitradas)


// Ejercicio 2
const copiaCervezaDos = Array.from(beers)
function obtenerDiezCervezasMasAlcoholicas (cervezas){
const ordenarCervezasPorGradoAlcoholico = cervezas.sort((a,b) => {
    if (a.abv < b.abv){
    return 1
    }
    else if (a.abv > b.abv){
    return -1
    }else {
        return 0
    }})
 const diezCervezasMasAlcoholicas = ordenarCervezasPorGradoAlcoholico.slice(0,10)
 return diezCervezasMasAlcoholicas
}

const diezCervezasMasAlcoholicas = obtenerDiezCervezasMasAlcoholicas(copiaCervezaDos)
console.log(diezCervezasMasAlcoholicas)




// ejercicio 3
  const copiaCerveza = Array.from(beers)

function obtenerDiezCervezasMenosAmargas(cervezas) {
const ordenarCervezasPorAmargor = cervezas.sort((a,b) => {
    if (a.ibu > b.ibu){
    return 1
    }
    else if (a.ibu < b.ibu){
    return -1
    }else {
        return 0
    }});
    const diezCervezasMenosAmargas = ordenarCervezasPorAmargor.slice(1,11)
    return diezCervezasMenosAmargas
}
const diezCervezasMenosAmargas = obtenerDiezCervezasMenosAmargas(copiaCerveza)
console.log(diezCervezasMenosAmargas)


//ejercicio 4
function ordenarCervezasPorPropiedad(cervezas, propiedad, boleano) {
    const cervezasOrdenadas = cervezas.sort((a, b) => {
      if (boleano === true) {
        return a.propiedad > b.propiedad;
      } else {
        return b.propiedad < a.propiedad;
      }
    });
  
    const cervezasTop = cervezasOrdenadas.slice(0, 10);
    return cervezasTop;
  }
  
    
    cervezasOrdenadasTop = ordenarCervezasPorPropiedad(beers, beers.attenuation_level, false)
console.log(cervezasOrdenadasTop)

  // ejercicicio 5

  const tablaCervezas = document.getElementById("tablaCervezas")

  function crearTabla(objeto){
    return `<tr>
            <td>${objeto.name}</td>
            <td>${objeto.abv}</td>
            <td>${objeto.ibu}<td>
            </tr>`
  }

  function mostrarTabla(array, elementHTML){
    let template = ""
    for (let cerveza of array){
        template += crearTabla(cerveza)
    }
    elementHTML.innerHTML = template
}

mostrarTabla(beers, tablaCervezas)