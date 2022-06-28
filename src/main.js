let scenes = []
scenes.push(preloadScene);
scenes.push(creditsScene);
scenes.push(infoScene)
scenes.push(startScene);
scenes.push(preGameScene);
scenes.push(chooseScene);
scenes.push(endScene);
scenes.push(gameScene);

var config = {
	type: Phaser.CANVAS,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 2048,
		height: 1200,
	},
	render: {
		pixelArt: false
	},
	backgroundColor: "#ffffff",
	parent: 'game',
	dom: {
		createContainer: true
	},
	scene: scenes,
};


var game = new Phaser.Game(config);
game.scale.fullscreenTarget = document.getElementById(config.parent);