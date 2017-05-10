var game;

game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('Menu1', Menu1);
game.state.add('Game1', Game1);
game.state.add('Game_Over1', Game_Over1);

game.state.add('Menu2', Menu2);
game.state.add('Game2', Game2);
game.state.add('Game_Over2', Game_Over2);

game.state.add('Menu3', Menu3);
game.state.add('Game3', Game3);
game.state.add('Game_Over3', Game_Over3);

game.state.start('Menu1');
