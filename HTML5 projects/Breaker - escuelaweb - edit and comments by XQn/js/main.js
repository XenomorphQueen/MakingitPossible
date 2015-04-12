var game; // Manejador de estado

window.onload = function () { //Una vez se carga toda la pagina se ejecuta con este parametro
  game = new Phaser.Game(640, 429, Phaser.AUTO, "phaser_game"); /* phaser (WebGL, Canvans) */
  game.state.add("StateMain", StateMain);
  game.state.add("StateOver", StateOver);
  game.state.start("StateMain");
};