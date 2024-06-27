const prueba = (number) => {

    const array = [];
    for (var i = 0; i < 10; i++) {

        var tupla = {
            id: i + 1,
            number: Math.round(Math.random() * (number - 1) + 1),
        };
        
        array.push(tupla);
    }
    console.log(array)
    idMenores(array, number)
}

const idMenores = (array, number) => {
    const arraySuma = [];
    let flag = false;
    let number1 = number;
    for (var i = 0; i < number; i++) {
        array.map(
            dato => {
                if ( dato["number"] ==  number1 - 1  && !flag) {
                    console.log("El id menor del número " +  dato["number"] + " es " + dato["id"]);
                    arraySuma.push(dato["number"])
                    number1--;
                    flag = true;
                }else{
                    flag = false;
                   
                }
                return;
            }
        )
        number1--;
    }

    suma(arraySuma)
}

const suma = (array) => {
    console.time("Timer: ");
    let sumatoria = 0;
    array.map(
        valor => {
            sumatoria = sumatoria + valor;
        }
    )
    console.log("La sumatia es: " + sumatoria)
    console.timeEnd("Timer: ");


}