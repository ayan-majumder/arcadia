var Game_Over1 = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', 'assets/game_over1.png');
        game.load.audio('end','assets/Funny-game-over-sound.mp3');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        game_music.stop();
        var over=game.add.audio('end');
        over.play();
        this.add.button(0, 0, 'gameover', this.startGame, this);

        // Last Score Info.
        game.add.text(330, 370, "LAST SCORE", { font: "bold 24px sans-serif", fill: "#46c0f9", align: "center"});
        game.add.text(400, 420, count.toString(), { font: "bold 28px sans-serif", fill: "#fff", align: "center" });

    },

    startGame: function () {

        // Change the state to the actual game.
        if(count<20){
        count=0;
        this.state.start('Game1');
        }
        else
            this.state.start('Menu2');
            count=0;

    }

};
