async function EsperarMsj(mensaje) {
    await new Promise(resolve=> setTimeout(resolve,2000));
    return "Acaban de pasar dos segundos"
}
async function Inicio(tiempo){
    const tiempoTranscurrido = await EsperarMsj();
    console.log(tiempoTranscurrido);
}
Inicio();