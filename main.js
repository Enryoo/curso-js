function convertir() {
    let valore = parseInt(document.getElementById('valor').value)
    let resultado = 0
    let dolar = 338
    let euro = 361
    if (document.getElementById('uno').checked){
        resultado = valore / dolar;
        alert('El cambio de pesos a Dolares es: $' + resultado.toFixed(2))
    }
    else if (document.getElementById('dos').checked){
        resultado = valore / euro;
        alert('El cambio de pesos a Euros es: $' + resultado.toFixed(2))
    }
    else{
        alert('Tienes que completar todos los campos')
    }    

}

function capturar() {
    function Coin(moneda,cambio){
        this.moneda=moneda;
        this.cambio=cambio;
    }
    let monedaCapturar = document.getElementById("moneda").value;
    let cambioCapturar = document.getElementById("cambio").value;

    nuevoCoin = new Coin(monedaCapturar,cambioCapturar);
    agregar()
}

let baseDatos= []
function agregar() {
    baseDatos.push(nuevoCoin)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoCoin.moneda+'</td><td>'+nuevoCoin.cambio+'</td></tbody>'
}

let root = document.getElementById("root")
function createCards(){
    let map = db.map(x => {
        return (
            `<div class="card">
                <div>
                    <img src"${x.image}">
                </div>
                <div class="card-content">
                    <h3>${x.title}</h3>
                    <span>${x.price}</span>
                    <button>Ver mas</button>
                </div>
            </div>            
            `
        )
    })
    root.innerHTML = map
}

createCards()
