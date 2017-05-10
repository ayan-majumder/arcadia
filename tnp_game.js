
var timer2;
var total2=1;
var count2=0;

var Game2 = {

    preload : function() {
  //   	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// game.scale.setScreenSize(true);

    	game.load.image('pbub','assets/balloon.png');
    	game.load.image('abub','assets/balloon_pink.png');
    	game.load.image('bbub','assets/balloon_blue.png');
        game.load.image('cbub','assets/balloon_yellow.png');
    	game.load.image('background','assets/back_3.jpg');
        },

    create : function() {   

    	
    	timer2=game.time.create(false);
    timer2.loop(1000,updateCounter,this);
        timer2.start();


    function updateCounter()
    {
        total2++;
        if(total2==16)
        {
            
          //  game_music.stop();
        alert("SORRY!! YOU LOST :(");
    game.state.start('Game_Over2');
    total2 = 1;
    }
}

        var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
        var delay = 0;

// for random images including POS

        for(var j=0; j< 7; j++)
        {
        	var pbubble = game.add.sprite(0 + (game.world.randomX), game.rnd.integerInRange(400,600), 'pbub');

       pbubble.scale.set(game.rnd.realInRange(0.5, 1));

        var abubble = game.add.sprite(0 + (game.world.randomX), 200, 'abub');

        abubble.scale.set(game.rnd.realInRange(0.5, 1));

        var bbubble = game.add.sprite(0 + (game.world.randomX), 300, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.5, 1));

        var cbubble = game.add.sprite(0 + (game.world.randomX), game.rnd.integerInRange(100,600), 'cbub');

       cbubble.scale.set(game.rnd.realInRange(0.5, 1));

        var speed = game.rnd.between(8000, 10000);

        game.add.tween(abubble).to({ y: -100 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(pbubble).to({ y: -130 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(bbubble).to({ y: -80}, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(cbubble).to({ y: -150 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 50;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);
        }


// for POS only
		for(var i=0; i < 3; i++)
		{
			var bbubble = game.add.sprite(0 + (game.world.randomX), 470, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.5, 1));

        game.add.tween(bbubble).to({ y: -100 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 30;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);

		}


// for POS only

    	for (var k = 0; k < 3; k++)
    	{
        var bbubble = game.add.sprite(0 + (game.world.randomX), 600, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.5, 1));
     
        game.add.tween(bbubble).to({ y: -50 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 100;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);
    	}

        function destroySprite (bbubble) {

        bbubble.destroy();
       count2++;
       if(count2==10)
         {
        alert("CONGRATS!! YOU WON :)");
        game.state.start('Menu3');
        total2=1;
         }
        }

},

    update: function() {

        game.add.text(32, 32, "CLICK 10 BLUE BALLOON IN 15 SECS", { font: "16px sans-serif", fill: "#FFFFFF"});
    game.debug.text('TIME IN SECONDS: ' + total2,32,32);
    game.debug.text('BALLOONS BURST: ' +count2,32,580);
     
     
    },
};
