class startScene extends Phaser.Scene {
  constructor() {
    super("startScene");
  }

  init(data) {
    this.a1 = data.a1;
    this.a2 = data.a2;
    this.b1 = data.b1;
    this.b2 = data.b2;
  }

  create() {
    var gridConfig = {
      'scene': this,
      'cols': 21,
      'rows': 21
    }
    this.aGrid = new AlignGrid(gridConfig);

    this.background = this.add.image(0, 0, 'background');
    this.aGrid.placeAtIndex(220, this.background);
    this.background.setScale(1.57);

    this.title1 = this.add.image(0, 0, 'titulo');
    this.title2 = this.add.image(0, 0, 'titulo2');
    this.title1.setScale(1.6);
    this.aGrid.placeAtIndex(94, this.title1);
    this.title2.setScale(0.8);
    this.title2.setOrigin(0.65, 0.7);
    this.aGrid.placeAtIndex(50, this.title2);

    this.btPlay = this.add.image(0, 0, 'btPlay');
    this.btPlay.setScale(1.33);
    this.aGrid.placeAtIndex(283, this.btPlay);

    this.boneco = this.add.image(0, 0, 'boneco');
    this.boneco.setScale(1.65);
    this.boneco.setOrigin(0.5, 0.45);
    this.aGrid.placeAtIndex(318, this.boneco);

    this.info = this.add.image(0, 0, 'btInfo');
    this.info.setScale(0.8);
    this.info.setOrigin(0.3, 0.8);
    this.aGrid.placeAtIndex(355, this.info);

    this.credits = this.add.image(0, 0, 'btCreditos');
    this.credits.setScale(0.8);
    this.credits.setOrigin(0.3, 0.8);
    this.aGrid.placeAtIndex(418, this.credits);

    this.creditsInfo = this.add.image(0, 0, 'creditos');
    this.creditsInfo.setScale(1.15);
    this.aGrid.placeAtIndex(283, this.creditsInfo);

    this.infoBoard = this.add.image(0, 0, 'infoboard');
    this.infoBoard.setScale(1.15);
    this.aGrid.placeAtIndex(283, this.infoBoard);
    this.infoBoard.setVisible(false);

    this.closeButtonInfo = this.add.image(0, 0, 'btClose');
    this.closeButtonInfo.setScale(0.7);
    this.aGrid.placeAtIndex(180.9, this.closeButtonInfo);
    this.closeButtonInfo.setOrigin(0.2, 0.55);

    this.closeButton = this.add.image(0, 0, 'btClose');
    this.closeButton.setScale(0.7);
    this.aGrid.placeAtIndex(180.9, this.closeButton);
    this.closeButton.setOrigin(0.2, 0.55);

    this.creditsInfo.setVisible(false);
    this.closeButton.setVisible(false);
    this.closeButtonInfo.setVisible(false);



    // --------------- Efeitos nas imagens --------------------
    this.btPlay.setInteractive({ useHandCursor: true });
    this.btPlay.on('pointerover', () => {
      this.btPlay.displayHeight += 5;
      this.btPlay.displayWidth += 5;
    });
    this.btPlay.on('pointerout', () => {
      this.btPlay.displayHeight -= 5;
      this.btPlay.displayWidth -= 5;
    });

    this.info.setInteractive({ useHandCursor: true });
    this.info.on('pointerover', () => {
      this.info.displayHeight += 5;
      this.info.displayWidth += 5;
    });
    this.info.on('pointerout', () => {
      this.info.displayHeight -= 5;
      this.info.displayWidth -= 5;
    });

    this.credits.setInteractive({ useHandCursor: true });
    this.credits.on('pointerover', () => {
      this.credits.displayHeight += 5;
      this.credits.displayWidth += 5;
    });
    this.credits.on('pointerout', () => {
      this.credits.displayHeight -= 5;
      this.credits.displayWidth -= 5;
    });

    this.closeButton.setInteractive({ useHandCursor: true });
    this.closeButton.on('pointerover', () => {
      this.closeButton.displayHeight += 5;
      this.closeButton.displayWidth += 5;
    });
    this.closeButton.on('pointerout', () => {
      this.closeButton.displayHeight -= 5;
      this.closeButton.displayWidth -= 5;
    });


    this.closeButtonInfo.setInteractive({ useHandCursor: true });
    this.closeButtonInfo.on('pointerover', () => {
      this.closeButtonInfo.displayHeight += 5;
      this.closeButtonInfo.displayWidth += 5;
    });
    this.closeButtonInfo.on('pointerout', () => {
      this.closeButtonInfo.displayHeight -= 5;
      this.closeButtonInfo.displayWidth -= 5;
    });

    // --------------- Transicoes --------------------

    //Ver Créditos
    this.credits.on('pointerup', function (pointer) {

      this.creditsInfo.setVisible(true);
      this.closeButton.setVisible(true);


    }, this);

    this.closeButton.on('pointerup', function (pointer) {

      this.creditsInfo.setVisible(false);
      this.closeButton.setVisible(false);


    }, this);


    this.closeButtonInfo.on('pointerup', function (pointer) {

      this.infoBoard.setVisible(false);
      this.closeButtonInfo.setVisible(false);


    }, this);

    //Ver informação jogo
    this.info.on('pointerup', function (pointer) {

      this.infoBoard.setVisible(true);
      this.closeButtonInfo.setVisible(true);

    }, this);

    //Ir para scene de escolher modo de jogo
    this.btPlay.on('pointerup', function (pointer) {
      this.background.alpha = 0;

      this.tweens.add({
        targets: [this.info, this.credits, this.btPlay, this.boneco, this.title1, this.title2],
        delay: 100,
        durantion: 1000,
        x: '-=' + game.config.width,
        ease: 'power2'
      });
      this.scene.transition({
        target: 'preGameScene',
        duration: 1000,
        data: { a1: this.a1, a2: this.a2, b1: this.b1, b2: this.b2 },
        moveBelow: true,
      });
    }, this);

    // got here from ...
    this.events.on('transitionstart', function (fromScene, duration) {
      if (fromScene === this.scene.get('preloadScene')) {
        this.tweens.add({
          delay: 100,
          targets: [this.background, this.info,
          this.btPlay, this.credits, this.boneco,
          this.title1, this.title2],
          durantion: 3000,
          alpha: { start: 0, to: 1 },
          ease: 'Linear',
        });
      }
      if (fromScene === this.scene.get('preGameScene') || fromScene === this.scene.get('infoScene') || fromScene === this.scene.get('creditsScene')) {
        // this.tweens.add({
        //   delay: 100,
        //   targets: this.background,
        //   durantion: 1000,
        //   alpha: { start: 0.45, to: 1 },
        //   ease: 'Linear'
        // });

        this.title1.x -= game.config.width;
        this.title2.x -= game.config.width;
        this.btPlay.x -= game.config.width;
        this.boneco.x -= game.config.width;
        this.credits.x -= game.config.width;
        this.info.x -= game.config.width;
        this.tweens.add({
          delay: 100,
          targets: [this.title1, this.title2, this.btPlay, this.info, this.credits, this.boneco],
          x: '+=' + game.config.width,
          durantion: 3000,
          ease: 'power2',

        });
      }
    }, this);


    // this.aGrid.show();
    // this.aGrid.showNumbers();
  }
}