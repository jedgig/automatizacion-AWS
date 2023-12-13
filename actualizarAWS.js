function actualizarAWS() {
    const min = 790000;
    const max = 880000;
  
    const tiempoEspera = Math.floor(Math.random() * (max - min + 1)) + min;
  
    console.log(`Próxima actualización en ${tiempoEspera / 1000} segundos`);
    console.log(' ');
    StartLabs();
    console.log('AWS Actualizado correctamente');
    console.log('-----------------------------');
    console.log(' ');
    setTimeout(actualizarAWS, tiempoEspera);
}
  
actualizarAWS();
