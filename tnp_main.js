var game;

game = new Phaser.Game(800, 600, Phaser.AUTO, '');
// game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
// game.scale.setScreenSize(true);

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);


game.state.start('Menu');
