var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, '');

game.state.add('Menu3', Menu3);
game.state.add('Game3', Game3);
game.state.add('Game_Over3', Game_Over3);


game.state.start('Menu3');
