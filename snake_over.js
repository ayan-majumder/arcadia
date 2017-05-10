var Game_Over3 = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', 'assets/snake_over.jpg');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);

        // Last Score Info.
        game.add.text(300, 450, "LAST SCORE", { font: "bold 28px sans-serif", fill: "#46c0f9", align: "center"});
        game.add.text(500, 445, score.toString(), { font: "bold 36px sans-serif", fill: "#fff", align: "center" });

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game3');

    }

};