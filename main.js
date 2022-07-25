let acumulador = 0
let bandera = true
while(bandera){
    let numIngresado = parseInt(prompt("Ingrese un número a sumar"))
    acumulador = acumulador + numIngresado
    console.log("acumulador parcial " + acumulador);
    if(acumulador >= 100){
        console.log("Felicitaciones a llegado a 100")
        bandera = false
    }
}