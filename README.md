# Documentación para la Automatización de Vocareum AWS

Este repositorio contiene un script en JavaScript que se utiliza para automatizar la actualización periódica de instancias AWS en el entorno de laboratorio de Vocareum de AWS Academy. El objetivo principal es extender el tiempo de acceso gratuito a las máquinas AWS para estudiantes.

## Funcionamiento

El script `actualizarAWS.js` se ejecuta en la consola del navegador en el panel del laboratorio en Vocareum. Su principal función es reiniciar las instancias AWS automáticamente antes de que se agote el tiempo límite de 4 horas de funcionamiento gratuito proporcionado por Vocareum. Esto se logra utilizando un temporizador que ejecuta la función `StartLabs()` para reiniciar el laboratorio.

## Uso

Para utilizar este script, sigue estos pasos:

1. Abre el panel del laboratorio en Vocareum.

2. Abre la consola del navegador (F12 o clic derecho > Inspeccionar > Consola).

3. Copia y pega el código proporcionado en el archivo `actualizarAWS.js` en la consola del navegador.

4. Presiona Enter para ejecutar el script.

El script comenzará a reiniciar las instancias AWS automáticamente. Cada reinicio se programará aleatoriamente entre 11 y 18 minutos, lo que ayuda a evitar la desconexión automática.

**Nota Importante:** Asegúrate de que tu laboratorio se inicia utilizando el comando `StartLabs();`. Este comando es fundamental para el funcionamiento correcto del script.

## Detalles del Script

El script utiliza la función `actualizarAWS()` que está configurada para ejecutarse de manera recurrente. Aquí hay una descripción de las partes clave del código:

```javascript
const min = 720000;  // 11 minutos en milisegundos
const max = 1080000; // 18 minutos en milisegundos

const tiempoEspera = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Próxima actualización en ${tiempoEspera / 1000} segundos`);
console.log(' ');
StartLabs();  // Comando para iniciar el laboratorio
console.log('AWS Actualizado correctamente');
console.log('-----------------------------');
console.log(' ');

setTimeout(actualizarAWS, tiempoEspera);
```
