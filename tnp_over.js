var Game_Over2 = {

    preload : function() {
//         game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
// game.scale.setScreenSize(true);
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', 'assets/pab_m.jpg');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);

        // Last Score Info.
      //  game.add.text(400, 450, "LAST SCORE", { font: "bold 16px sans-serif", fill: "#000000", align: "center"});
    game.add.text(490, 340, count2.toString(), { font: "bold 36px sans-serif", fill: "#000000", align: "center" });
    
    if(count2==10)
    {
    game.add.text(320,440,"YOU WON", {font: "bold 36px sans-serif",fill: "#000000"});
    }
    else
        game.add.text(320,440,"YOU LOST", {font: "bold 36px sans-serif",fill: "#000000"});
    },

    startGame: function () {
        
        if(count2<10){
        count2=0;
        // Change the state to the actual game.
        this.state.start('Game2');
        }
        else{
            this.state.start('Menu3');
            count2=0;
        }
	
    }

};
