p0:

El cliente es el navegador que hace la petición. El servidor es el computador o programa que recibe esa petición y se encarga de procesarla. Entrada: Viaja el request, que contiene información como el método, la URL, los headers y en algunos casos datos en el body. Salida: Viaja el response, que contiene un código de estado, headers y los datos que devuelve el servidor, por ejemplo JSON, texto o HTML.

Reflexion:
Hacer un servidor a mano es bastante cansón por tres razones: primero, el enrutamiento es muy frágil porque toca escribir puros if/else y cualquier mayúscula, barra extra o parámetro dinámico rompe todo; segundo, mandar respuestas da pereza porque hay que configurar las cabeceras JSON y convertir los datos a texto manualmente cada vez; y tercero, recibir datos en peticiones POST se vuelve muy canzón al tener que escuchar eventos por pedazos (req.on('data')) para ir pegándolos y procesándolos a mano.

##p4:
al ingresar/no-existe saldra error 404

reflexion m2:
1.aveces no se ejecutaba el servidor
2.el script del package toco modificarlos
3.casi no puede ejecutar el server
 
##p5:
en el navegador se quedara en bucle
en la terminal e imprimirá la línea del registro (hora, método y URL) una sola vez al entrar la petición, pero ahí se detendrá la ejecución del servidor para esa solicitud 

##p6:
Código de estado: 200 OK.
Body: Muestra nada porque el sistema compara el número 1 del arreglo con el texto "1" de la URL y no encuentra ninguna coincidencia.
el 1 aparece sin comillas

##p7:
Recibe el estado 404 Not Found con el mensaje de que la actividad no existe.
En la terminal: Muestra un error grave indicando que el servidor intentó enviar dos respuestas para una misma petición.
El return es obligatorio para cortar la ejecución e impedir que el código siga de largo hasta el res.json(actividad).

##p8: 
?tipo=agua devuelve la lista (200). ?tipo=AGUA da vacío por las mayúsculas (se soluciona con .toLowerCase()). Para ?tipo=fuego debe responder 200 con lista vacía y no 404, porque la ruta es válida aunque no haya registros.

##p9: 
Recibiré código 201 Created con el JSON de la nueva actividad y su ID. En la terminal se imprimirá el body gracias a que configuré app.use(express.json()).

##p10: 
Al reiniciar el servidor con --watch, la actividad creada desaparece, ya que los datos solo viven temporalmente en la memoria RAM.

##p11:
Si muevo el bloque del 404 al inicio del archivo (antes de las rutas), ninguna ruta va a funcionar y todas devolverán el error 404. Esto pasa porque Express lee el código de arriba hacia abajo de manera secuencial; como el middleware 404 intercepta todas las peticiones con un app.use() general sin dejar pasar el flujo, la aplicación se detiene ahí y nunca alcanza a evaluar las rutas de /actividades.

Conclusion:
Express atiende las peticiones haciendo la fila en estricto **orden**: revisa quién coincide y, si la ruta no le toca a él, le echa el **next** al parcero de al lado para que siga la jugada.

##p12:
Si pongo /actividades/gratis después de una ruta como /actividades/:id  express va a creer que gratis es un ID y se equivocará de ruta. Para arreglarlo sin cambiar la URL, solo hay que poner la ruta de gratis primero