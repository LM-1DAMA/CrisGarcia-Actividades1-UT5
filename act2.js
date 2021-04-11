function verDatosAlumno(nombre, curso, asignaturas)
{
    console.log(nombre + "-" + curso + "-asignaturas:"+ asignaturas.join("/"))
}

function llamarArray(...alumnos){
    //verDatosAlumno(["Adri","DAM","LM","FOl"])
    if(alumnos.length > 0)
    {
        alumnos.forEach(alumno => { 
            let asignaturas = alumno.slice(2, alumno.length);
            verDatosAlumno(alumno[0], alumno[1], asignaturas);
        })
    }
    else {
        console.log("no hay datos para mostrar")
    }
}

llamarArray(["Adri","DAM","LM","FOl"], ["Juan","DAM","LM","FOl"], ["Pepe","DAM","LM","FOl"])
llamarArray()