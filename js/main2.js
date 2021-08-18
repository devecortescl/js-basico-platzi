
// creamos la funcion que nos permite calcular el precio final con descuento (Traemos los valores de precio y descuento desde los input)
function calcularPrecioConDescuento(precio, descuento) {

    // creamos una variable donde determinamos el porcentaje 
    const porcentajePrecioConDescuento = 100 - descuento;

    //luego creamos otra variable que nos permite calcular el precio x por el descuento / 100 
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    // retornamos el valor para mostrar en html
    return precioConDescuento;
  }
  
 // funcion que funciona solo cuando hacemos click que permite tomar los valores y aplicar la funcion de calcular precio con descuento. 
 function onClickButtonPriceDiscount() {
    // traemos un valor desde el input precio
    const inputPrice = document.getElementById("InputPrice");
    // creamos una variable para guardar el precio
    const priceValue = inputPrice.value;
    
    // traemos un valor desde el input descuento
    const inputDiscount = document.getElementById("InputDiscount");
    // creamos una variable para guardar el descuento
    const discountValue = inputDiscount.value;
  
    //guardamos en una variable el resultado de la funcion (calcular precio con descuento ingresando los valores obtenidos en formulario)
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    //mostramos en un elemento dentro de html el resultado y lo pintamos con innerText
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  
  
