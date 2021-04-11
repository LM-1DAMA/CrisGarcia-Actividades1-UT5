
function ejercicio1(cadena, booleano, funcion, arrayNumerico) {

    let productoArray = 1;

    if (typeof cadena === 'string' && typeof booleano === 'boolean' &&
        typeof funcion === 'function' && Array.isArray(arrayNumerico)) 
    {
        if(booleano == true)
        {
            arrayNumerico.forEach(num=>productoArray*=num)

            if(productoArray > 100)
            {
                console.log(cadena.includes('a') ? 'la letra "a" no está permitida' : 'Muy bien! no has usado la "a"');
            }
            else 
            {
                console.log("El resultado del array es insuficiente para comprobar la cadena")
            }
        }
        else
        {
            funcion();
        }
    }
    else {
        console.log("fotmato incorrecto");
    }
    
}

ejercicio1("nepe", true, () => { alert("Se acabó el juego") }, [1, 1, 0, 4, 5])


