p0


El cliente es el navegador que hace la petición. El servidor es el computador o programa que recibe esa petición y se encarga de procesarla. Entrada: Viaja el request, que contiene información como el método, la URL, los headers y en algunos casos datos en el body. Salida: Viaja el response, que contiene un código de estado, headers y los datos que devuelve el servidor, por ejemplo JSON, texto o HTML.

Reflexión

Reflexion 
Hacer un servidor a mano es bastante cansón por tres razones: primero, el enrutamiento es muy frágil porque toca escribir puros if/else y cualquier mayúscula, barra extra o parámetro dinámico rompe todo; segundo, mandar respuestas da pereza porque hay que configurar las cabeceras JSON y convertir los datos a texto manualmente cada vez; y tercero, recibir datos en peticiones POST se vuelve muy canzón al tener que escuchar eventos por pedazos (req.on('data')) para ir pegándolos y procesándolos a mano.

##p4
al ingresar/no-existe saldra error 404

reflexion m2
1.aveces no se ejecutaba el servidor
2.el script del package toco modificarlos
3.casi no puede ejecutar el server
 
##p5
en el navegador se quedara en bucle
en la terminal e imprimirá la línea del registro (hora, método y URL) una sola vez al entrar la petición, pero ahí se detendrá la ejecución del servidor para esa solicitud 

##p 6
Código de estado: 200 OK.
Body: Muestra nada porque el sistema compara el número 1 del arreglo con el texto "1" de la URL y no encuentra ninguna coincidencia.
el 1 aparece sin comillas

##p7
Recibe el estado 404 Not Found con el mensaje de que la actividad no existe.
En la terminal: Muestra un error grave indicando que el servidor intentó enviar dos respuestas para una misma petición.
El return es obligatorio para cortar la ejecución e impedir que el código siga de largo hasta el res.json(actividad).

