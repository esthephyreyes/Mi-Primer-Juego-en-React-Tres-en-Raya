# Mi Primer Juego en React – Tres en Raya

## Nombre
Estefany Altagracia Reyes Lora

## Matrícula
100585377

## Descripción del juego
Este es mi primer juego hecho con React.  
Es una versión del clásico Tres en Raya (Tic Tac Toe), pero con un toque dominicano.  
Dos jugadores, X y O, se turnan para colocar su símbolo en un tablero de 3x3.  
Gana el primero que logre hacer una línea completa, ya sea horizontal, vertical o diagonal.  

Le puse colores inspirados en la bandera dominicana:  
la X se pone en rojo  
la O en azul  
el fondo combina los colores patrios.  

Además, el juego tiene un **marcador** que cuenta cuántas partidas ha ganado cada jugador.  
Cuando uno de los dos llega a **2 victorias**, se reinicia automáticamente la partida y comienza una nueva “mano”.

## Qué aprendí
Aprendí a crear un proyecto con React usando Vite, a manejar los turnos con useState y a detectar cuándo alguien gana o hay empate.  
También entendí mejor cómo React actualiza el tablero cuando cambia el estado y cómo organizar bien los archivos del proyecto.  
Además, aprendí a guardar el puntaje de cada jugador y a reiniciar el marcador automáticamente cuando alguien llega a 2 victorias.

## Qué parte fue más difícil
Lo más difícil fue entender cómo funcionan los estados en React y lograr que el juego se actualizara correctamente sin errores.  
También me tomó tiempo limpiar los archivos iniciales de Vite y dejar solo lo necesario para que el juego corriera bien.  
Otra parte que me costó fue hacer que el marcador funcionara sin que se reiniciara el conteo después de cada ronda.

## Cómo se ejecuta
1. Abro la carpeta del proyecto.  
2. Escribo los comandos:

```bash
npm install
npm run dev
