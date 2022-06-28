class preGameScene extends Phaser.Scene {
    constructor() {
        super("preGameScene");
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
        this.background = this.add.image(0, 0, "background");
        this.aGrid = new AlignGrid(gridConfig);
        this.aGrid.placeAtIndex(220, this.background);
        this.background.setScale(1.57);

        this.title1 = this.add.image(0, 0, 'titulo');
        this.title2 = this.add.image(0, 0, 'titulo2');
        this.title1.setScale(1.6);
        this.aGrid.placeAtIndex(94, this.title1);
        this.title2.setScale(0.8);
        this.title2.setOrigin(0.65, 0.7);
        this.aGrid.placeAtIndex(50, this.title2);

        this.againstC = this.add.image(0, 0, 'againstComputer');
        this.againstC.setScale(1.4);
        this.aGrid.placeAtIndex(280, this.againstC);

        this.back = this.add.image(0, 0, 'voltaMenu');
        this.back.setScale(0.6);
        this.back.setOrigin(0.1, -0.7);

        this.aGrid.placeAtIndex(336, this.back);
        // this.aGrid.placeAtIndex(211, this.back);

        this.facil = this.add.image(0, 0, 'facil');
        this.facil.setScale(1.2);
        // this.facil.setVisible(false);
        this.aGrid.placeAtIndex(223, this.facil);

        this.medio = this.add.image(0, 0, 'medio');
        this.medio.setScale(1.2);
        // this.medio.setVisible(false);
        this.aGrid.placeAtIndex(349, this.medio);



        const x = this.scale.width / 2
        const y = this.scale.height / 2

        this.textoScore = this.add.text(x, y, this.a1 + " - " + this.a2, {
            fontFamily: 'Quicksand',
            fontSize: '48px',
            color: '#114206',
            fontStyle: 'normal',
            shadow: { stroke: false, fill: true, color: '#114206', blur: -3, offsetX: null, offsetY: 3 }
        })
        this.textoScore.setVisible(true);
        this.textoScore.setOrigin(0.50, 0.99);
        this.aGrid.placeAtIndex(286, this.textoScore);
        this.textoScore.y -= 4;

        this.textoScore2 = this.add.text(x, y, this.b1 + " - " + this.b2, {
            fontFamily: 'Quicksand',
            fontSize: '48px',
            color: '#f1e30a',
            fontStyle: 'normal',
            shadow: { stroke: false, fill: true, color: '#f1e30a', blur: -3, offsetX: null, offsetY: 3 }
        })
        this.textoScore2.setVisible(true);
        this.textoScore2.setOrigin(0.50, 0.99);
        this.aGrid.placeAtIndex(412, this.textoScore2);
        this.textoScore2.y -= 4;

        // this.dificil = this.add.image(0, 0, 'dificil');
        // // this.dificil.setScale(2);
        // // this.dificil.setVisible(false);
        // this.aGrid.placeAtIndex(370, this.dificil);



        this.sel2Players = this.add.image(0, 0, "2players");
        this.aGrid.placeAtIndex(202, this.sel2Players);
        this.sel2Players.setVisible(false);


        this.sel3Players = this.add.image(0, 0, "3players");
        this.aGrid.placeAtIndex(286, this.sel3Players);
        this.sel3Players.setVisible(false);


        this.sel4Players = this.add.image(0, 0, "4players");
        this.aGrid.placeAtIndex(370, this.sel4Players);
        this.sel4Players.setVisible(false);

        let dificulty = 0;

        this.back.setInteractive({ useHandCursor: true });
        this.back.on('pointerover', () => {
            this.back.displayHeight += 5;
            this.back.displayWidth += 5;
        });
        this.back.on('pointerout', () => {
            this.back.displayHeight -= 5;
            this.back.displayWidth -= 5;
        });

        this.facil.setInteractive({ useHandCursor: true });
        this.facil.on('pointerover', () => {
            this.facil.displayHeight += 5;
            this.facil.displayWidth += 5;
        });
        this.facil.on('pointerout', () => {
            this.facil.displayHeight -= 5;
            this.facil.displayWidth -= 5;
        });

        this.medio.setInteractive({ useHandCursor: true });
        this.medio.on('pointerover', () => {
            this.medio.displayHeight += 5;
            this.medio.displayWidth += 5;
        });
        this.medio.on('pointerout', () => {
            this.medio.displayHeight -= 5;
            this.medio.displayWidth -= 5;
        });

        // this.dificil.setInteractive({ useHandCursor: true });
        // this.dificil.on('pointerover', () => {
        //     this.dificil.displayHeight += 5;
        //     this.dificil.displayWidth += 5;
        // });
        // this.dificil.on('pointerout', () => {
        //     this.dificil.displayHeight -= 5;
        //     this.dificil.displayWidth -= 5;
        // });

        this.sel2Players.setInteractive({ useHandCursor: true });
        this.sel2Players.on('pointerover', () => {
            this.sel2Players.displayHeight += 5;
            this.sel2Players.displayWidth += 5;
        });
        this.sel2Players.on('pointerout', () => {
            this.sel2Players.displayHeight -= 5;
            this.sel2Players.displayWidth -= 5;
        });

        this.sel3Players.setInteractive({ useHandCursor: true });
        this.sel3Players.on('pointerover', () => {
            this.sel3Players.displayHeight += 5;
            this.sel3Players.displayWidth += 5;
        });
        this.sel3Players.on('pointerout', () => {
            this.sel3Players.displayHeight -= 5;
            this.sel3Players.displayWidth -= 5;
        });

        this.sel4Players.setInteractive({ useHandCursor: true });
        this.sel4Players.on('pointerover', () => {
            this.sel4Players.displayHeight += 5;
            this.sel4Players.displayWidth += 5;
        });
        this.sel4Players.on('pointerout', () => {
            this.sel4Players.displayHeight -= 5;
            this.sel4Players.displayWidth -= 5;
        });





        // --------------- Transicoes --------------------

        this.back.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.title1, this.title2, this.againstC, this.back, this.facil, this.medio, this.dificil, this.sel2Players, this.sel3Players, this.sel4Players, this.textoScore, this.textoScore2],
                delay: 100,
                durantion: 1000,
                x: '+=' + game.config.width,
                ease: 'power2'
            });
            this.scene.transition({
                target: 'startScene',
                duration: 1000,
                moveBelow: true,
            });
        }, this);

        this.facil.on('pointerup', function (pointer) {
            dificulty = 1;
            this.sel2Players.setVisible(true);
            this.sel3Players.setVisible(true);
            this.sel4Players.setVisible(true);
            this.facil.setVisible(false);
            this.medio.setVisible(false);
            this.textoScore.setVisible(false);
            this.textoScore2.setVisible(false);

            // this.dificil.setVisible(false);
        }, this);

        this.medio.on('pointerup', function (pointer) {
            dificulty = 2;
            this.sel2Players.setVisible(true);
            this.sel3Players.setVisible(true);
            this.sel4Players.setVisible(true);
            this.facil.setVisible(false);
            this.medio.setVisible(false);
            this.textoScore.setVisible(false);
            this.textoScore2.setVisible(false);
            // this.dificil.setVisible(false);

        }, this);

        // this.dificil.on('pointerup', function (pointer) {
        //     dificulty = 3;
        //     this.sel2Players.setVisible(true);
        //     this.sel3Players.setVisible(true);
        //     this.sel4Players.setVisible(true);
        //     this.facil.setVisible(false);
        //     this.medio.setVisible(false);
        //     this.dificil.setVisible(false);

        // }, this);

        this.sel2Players.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.title1, this.title2, this.againstC, this.back, this.sel2Players, this.sel3Players, this.sel4Players],
                delay: 100,
                durantion: 1000,
                x: '-=' + game.config.width,
                ease: 'power2'
            });
            this.scene.transition({
                target: 'gameScene',
                duration: 1000,
                moveBelow: true,
                data: { dificulty: dificulty, numPlayers: 2, a1: this.a1, a2: this.a2, b1: this.b1, b2: this.b2 }
            });
        }, this);

        this.sel3Players.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.title1, this.title2, this.againstC, this.back, this.sel2Players, this.sel3Players, this.sel4Players, this.textoScore, this.textoScore2],
                delay: 100,
                durantion: 1000,
                x: '-=' + game.config.width,
                ease: 'power2'
            });
            this.scene.transition({
                target: 'gameScene',
                duration: 1000,
                moveBelow: true,
                data: { dificulty: dificulty, numPlayers: 3, a1: this.a1, a2: this.a2, b1: this.b1, b2: this.b2 }
            });
        }, this);

        this.sel4Players.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.title1, this.title2, this.againstC, this.back, this.sel2Players, this.sel3Players, this.sel4Players, this.textoScore, this.textoScore2],
                delay: 100,
                durantion: 1000,
                x: '-=' + game.config.width,
                ease: 'power2'
            });
            this.scene.transition({
                target: 'gameScene',
                duration: 1000,
                moveBelow: true,
                data: { dificulty: dificulty, numPlayers: 4, a1: this.a1, a2: this.a2, b1: this.b1, b2: this.b2 }
            });
        }, this);


        // got here from ...
        this.events.on('transitionstart', function (fromScene, duration) {
            if (fromScene === this.scene.get('startScene')) {
                // this.tweens.add({
                //     delay: 100,
                //     targets: [this.background],
                //     durantion: 5000,
                //     alpha: { start: 1, to: 0.45 },
                //     ease: 'Linear',
                // });
                this.title1.x += game.config.width;
                this.title2.x += game.config.width;
                this.againstC.x += game.config.width;
                this.back.x += game.config.width;
                this.facil.x += game.config.width;
                this.medio.x += game.config.width;
                this.textoScore.x += game.config.width;
                this.textoScore2.x += game.config.width;
                // this.dificil.x += game.config.width;
                this.sel2Players.x += game.config.width;
                this.sel3Players.x += game.config.width;
                this.sel4Players.x += game.config.width;

                this.tweens.add({
                    delay: 100,
                    targets: [this.title1, this.title2, this.againstC, this.back, this.facil, this.medio, this.dificil, this.sel2Players, this.sel3Players, this.sel4Players, this.textoScore, this.textoScore2],
                    durantion: 1000,
                    x: '-=' + game.config.width,
                    ease: 'Power2'
                });
            }

            if (fromScene === this.scene.get('gameScene')) {
                // this.tweens.add({
                //     delay: 100,
                //     targets: [this.background],
                //     durantion: 5000,
                //     alpha: { start: 1, to: 0.45 },
                //     ease: 'Linear',
                // });
                this.title1.x -= game.config.width;
                this.title2.x -= game.config.width;
                this.againstC.x -= game.config.width;
                this.back.x -= game.config.width;
                this.facil.x -= game.config.width;
                this.medio.x -= game.config.width;
                // this.dificil.x -= game.config.width;
                this.textoScore.x -= game.config.width;
                this.textoScore2.x -= game.config.width;
                this.sel2Players.x -= game.config.width;
                this.sel3Players.x -= game.config.width;
                this.sel4Players.x -= game.config.width;

                this.tweens.add({
                    delay: 100,
                    targets: [this.title1, this.title2, this.againstC, this.back, this.facil, this.medio, this.dificil, this.sel2Players, this.sel3Players, this.sel4Players, this.textoScore, this.textoScore2],
                    durantion: 5000,
                    x: '+=' + game.config.width,
                    ease: 'Power2'
                });
            }

            if (fromScene === this.scene.get('endScene')) {

                // this.tweens.add({
                //     delay: 100,
                //     targets: [this.background],
                //     durantion: 5000,
                //     alpha: { start: 1, to: 0.45 },
                //     ease: 'Linear',
                // });
                this.title1.x -= game.config.width;
                this.title2.x -= game.config.width;
                this.againstC.x -= game.config.width;
                this.back.x -= game.config.width;
                this.facil.x -= game.config.width;
                this.medio.x -= game.config.width;
                this.textoScore.x -= game.config.width;
                this.textoScore2.x -= game.config.width;
                // this.dificil.x -= game.config.width;

                this.tweens.add({
                    delay: 100,
                    targets: [this.title1, this.title2, this.againstC, this.back, this.facil, this.medio, this.textoScore, this.textoScore2],
                    durantion: 1000,
                    x: '+=' + game.config.width,
                    ease: 'Power2'
                });
            }
        }, this);


    }
}