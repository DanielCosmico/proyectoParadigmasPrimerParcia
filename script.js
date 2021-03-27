var hora1, hora2, hora3, hora4, hora5, hora6;

function interruptor (mesa, ini, fin, tot) {
    let foco = document.getElementById(mesa);
    if(foco.src.match('mesaOFF')){
        foco.src = "mesaON.png";
        tiempo1(ini, fin, tot);
    } else{
        foco.src = "mesaOFF.png"
        tiempo2(ini, fin, tot);
    }
}

function tiempo1 (ini, fin, tot){
    time = new Date;
    registrar(ini, time)
    horas = time.getHours()
    minutos = time.getMinutes()
    segundos = time.getSeconds()
    tiempotot = "Hora inicial: " + horas + ":" + minutos + ":" + segundos;
    tiempofinal = "Hora final: ";
    document.getElementById(ini).innerHTML = tiempotot;
    document.getElementById(fin).innerHTML = "Hora final: ";
    document.getElementById(tot).innerHTML = "Total: ";
    console.log(hora1)
}

function tiempo2 (ini, fin, tot){
    time = new Date;
    horas = time.getHours()
    minutos = time.getMinutes()
    segundos = time.getSeconds()
    tiempotot = "Hora final: " + horas + ":" + minutos + ":" + segundos;
    document.getElementById(fin).innerHTML = tiempotot;

    var delta1 = obtener(ini)
    console.log(delta1)
    var diffMs = (time - delta1)
    var diffSec = Math.round(diffMs / 1000)
    var costo = (diffSec * (50 / 3600))
    var costoRedondeado = parseFloat(costo).toFixed(3)
    resultado = "Total: $" + costoRedondeado

    document.getElementById(tot).innerHTML = resultado;
    
}

function registrar(ini, hora){
    switch (ini) {
        case "ini1":
          hora1 = hora
          break;

        case "ini2":
            hora2 = hora;
            break;

        case "ini3":
            hora3 = hora;
            break;
        
        case "ini4":
            hora4 = hora;
            break;
        
        case "ini5":
            hora5 = hora;
            break;

        case "ini6":
            hora6 = hora;
            break;
        
        default:
          break;
      }
}

function obtener(ini){
    switch (ini) {
        case "ini1":
          return hora1;

        case "ini2":
            return hora2;

        case "ini3":
            return hora3;
        
        case "ini4":
            return hora4;
        
        case "ini5":
            return hora5;

        case "ini6":
            return hora6;
        
        default:
          break;
      }
}