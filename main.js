//Ejercicio1 -- Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol.
//La función debe devolver un nuevo array con las cervezas que no excedan el nivel etilico. Cada elemento del
//nuevo array debe ser un objeto que tenga la propiedades, alcohol (abv) y "amargor" (ibu)

function nivelEtilico(beers, valorAlcohol) { 
    let cervezas = beers
    let cervezasFiltradas = cervezas.filter(cerveza => cerveza.abv <= valorAlcohol)
    let nuevoArrayCerveza = cervezasFiltradas.map(cerveza => {
        return {
            nombre: cerveza.name,
            abv: cerveza.abv,
            ibu: cerveza.ibu 
        }
        })
    return nuevoArrayCerveza;
}
  
  nivelEtilico(beers, 4)
let noExcedeNivelEtilico = nivelEtilico(beers, 6)
console.log (noExcedeNivelEtilico)

//Ejercicio2 -- Generar una función que reciba cmo parámetro un array de cervezas y devuelva un nuevo array con
//las 10 cervezas mas alcohólicas

function nivelEtilicoMasAlto(beers) { 
    let cervezas = beers
    let cervezasFiltradas = cervezas.filter(cerveza => cerveza.abv >= 5)
    let DiezCervezas = cervezasFiltradas.slice(0, 10)
    let nuevoArrayCerveza = DiezCervezas.map(cerveza => {
        return {
            nombre: cerveza.name,
            abv: cerveza.abv,
            ibu: cerveza.ibu 
        }
        })
    return nuevoArrayCerveza;
}
  
  let cervezasMasAlcoholicas = nivelEtilicoMasAlto(beers)
  console.log(cervezasMasAlcoholicas)


//Ejercicio3 -- Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con
//las 10 cervezas menos amargas.

function nivelEtilicoMasAmarga(beers) { 
    let cervezas = beers
    let cervezasFiltradas = cervezas.filter(cerveza => cerveza.ibu >= 50)
    let DiezCervezas = cervezasFiltradas.slice(0, 10)
    let nuevoArrayCerveza = DiezCervezas.map(cerveza => {
        return {
            nombre: cerveza.name,
            abv: cerveza.abv,
            ibu: cerveza.ibu 
        }
        })
    return nuevoArrayCerveza;
}
  
  let cervezasMasAmarga = nivelEtilicoMasAmarga(beers)
  console.log(cervezasMasAlcoholicas)

//Ejercicio4 -- Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor
//booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento,
//de manera ascente si el tercero es true o descendente si es falso.

function ordenPorPh(beers, propiedad, ascendente) { 
    let cervezas = beers
    let cervezasFiltradas = cervezas.filter(cerveza => cerveza.hasOwnProperty(propiedad))
    let cervezasOrdenadas = cervezasFiltradas.sort((cervezaA, cervezaB) => {
        if (ascendente) {
            return cervezaA.propiedad - cervezaB.propiedad
        } else {
            return cervezaB.propiedad - cervezaA.propiedad
        }
    })
    let DiezCervezas = cervezasOrdenadas.slice(0, 10)
    let nuevoArrayCerveza = DiezCervezas.map(cerveza => {
        return {
            nombre: cerveza.name,
            abv: cerveza.abv,
            ibu: cerveza.ibu,
            ph: cerveza.ph
        }
    })
    return nuevoArrayCerveza;
}
  
  let cervezasOrdenadasPorPh = ordenPorPh(beers, "ph", false)
  console.log(cervezasOrdenadasPorPh)

//Ejercicio5 -- Genera una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar
//(renderizar, dibujar, pintar, llenar, etc) en un archivo html una tabla que contenga las columnas "Name", "ABV", "IBU" 
//y una fila por cada elemento del array. Cada fila debe tener los datos que se piden de cada una de las cervezas.

function dibujarCerveza(elementoHTML, beers) {
    let tablaHTML = `
      <table class="d-flex justify-content-center">
        <tbody>
          <tr>
            <th class="table-secondary border rounded" colspan="3">Beers</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>ABV</td>
            <td>IBU</td>
            <td>PH</td>
            <td>IMG</td>
          </tr>
    `;
    
    for (let beer of beers) {
      tablaHTML += `
        <tr>
          <td>${beer.name}</td>
          <td>${beer.abv}</td>
          <td>${beer.ibu}</td>
          <td>${beer.ph}</td>
          <td>${beer.image_url}</td>
        </tr>
      `;
    }
    
    tablaHTML += `
        </tbody>
      </table>
    `;
  
    elementoHTML.innerHTML = tablaHTML;
  }
  
  let contenedorBeers = document.getElementById("contenedorBeers");
  dibujarCerveza(contenedorBeers, beers);

