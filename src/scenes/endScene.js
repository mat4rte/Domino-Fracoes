class endScene extends Phaser.Scene {


    constructor() {
        super({
            key: "endScene"
        })
    }

    init(data) {
        this.numPlayers = data.numPlayers;
        this.winner = data.winner;
        this.dificulty = data.dificulty;
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
        this.background = this.add.image(0, 0, "background");
        this.aGrid.placeAtIndex(220, this.background);
        this.background.setScale(1.57);

        this.miniLogo = this.add.image(0, 0, "titulopeq");
        this.miniLogo.setScale(1.2);
        this.aGrid.placeAtIndex(45, this.miniLogo);

        this.voltaMenu = this.add.image(0, 0, 'voltaMenu');
        this.voltaMenu.setScale(0.8);
        // this.fundoEnd = this.add.image(0, 0, 'fundoEnd');
        // this.fundoEnd.setScale(6, 4);
        // this.aGrid.placeAtIndex(220, this.fundoEnd);

        if (this.winner == 1) {
            //ganhou jog1
            this.gameWinner = this.add.image(0, 0, 'winJog1');
            if (this.dificulty == 1) {
                let a = parseInt(window.localStorage.getItem('a1'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("a1", a_s);
            }
            else if (this.dificulty == 2) {
                let a = parseInt(window.localStorage.getItem('b1'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("b1", a_s);
            }
        }
        else if (this.winner == 2) {

            //ganhou bot1
            this.gameWinner = this.add.image(0, 0, 'winBot1');
            if (this.dificulty == 1) {

                let a = parseInt(window.localStorage.getItem('a2'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("a2", a_s);

            }
            else if (this.dificulty == 2) {

                let a = parseInt(window.localStorage.getItem('b2'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("b2", a_s);
            }
        }
        else if (this.winner == 3) {
            //ganhou bot2

            if (this.numPlayers == 2 || this.numPlayers == 3)
                this.gameWinner = this.add.image(0, 0, 'winBot1');
            else
                this.gameWinner = this.add.image(0, 0, 'winBot2');

            if (this.dificulty == 1) {

                let a = parseInt(window.localStorage.getItem('a2'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("a2", a_s);
            }
            else if (this.dificulty == 2) {
                let a = parseInt(window.localStorage.getItem('b2'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("b2", a_s);
            }
        }
        else if (this.winner == 4) {
            //ganhou bot3
            if (this.numPlayers == 3)
                this.gameWinner = this.add.image(0, 0, 'winBot2');
            else
                this.gameWinner = this.add.image(0, 0, 'winBot3');

            if (this.dificulty == 1) {
                let a = parseInt(window.localStorage.getItem('a2'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("a2", a_s);
            }
            else if (this.dificulty == 2) {
                let a = parseInt(window.localStorage.getItem('b2'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("b2", a_s);
            }
        }
        //empate
        else if (this.winner == 5) {
            this.gameWinner = this.add.image(0, 0, 'winEmpate');
            if (this.dificulty == 1) {

                let a = parseInt(window.localStorage.getItem('a1'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("a1", a_s);


                let a2 = parseInt(window.localStorage.getItem('a2'));
                a2++;
                let a_s2 = a.toString();

                window.localStorage.setItem("a2", a_s2);

            }
            else if (this.dificulty == 2) {
                let a = parseInt(window.localStorage.getItem('b1'));
                a++;
                let a_s = a.toString();

                window.localStorage.setItem("b1", a_s);

                let a2 = parseInt(window.localStorage.getItem('b2'));
                a2++;
                let a_s2 = a.toString();

                window.localStorage.setItem("b2", a_s2);
            }
        }


        // this.gameWinner.setScale(6, 3);
        this.aGrid.placeAtIndex(220, this.gameWinner);
        this.aGrid.placeAtIndex(367, this.voltaMenu);

        //Botão Menu
        this.voltaMenu.setInteractive({ useHandCursor: true });
        this.voltaMenu.on('pointerup', function (pointer) {

        }, this);

        this.voltaMenu.on('pointerover', () => {
            this.voltaMenu.displayHeight += 5;
            this.voltaMenu.displayWidth += 5;
        });
        this.voltaMenu.on('pointerout', () => {
            this.voltaMenu.displayHeight -= 5;
            this.voltaMenu.displayWidth -= 5;
        });

        this.a1 = window.localStorage.getItem('a1');
        this.a2 = window.localStorage.getItem("a2");
        this.b1 = window.localStorage.getItem("b1");
        this.b2 = window.localStorage.getItem("b2");

        this.voltaMenu.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.gameWinner, this.voltaMenu, this.miniLogo],
                delay: 100,
                durantion: 1000,
                x: "+=" + game.config.width,
                ease: 'power2'
            });
            this.scene.transition({
                target: 'preGameScene',
                duration: 1000,
                moveBelow: true,
                data: {
                    a1: this.a1, a2: this.a2, b1: this.b1, b2: this.b2
                }
            });
        }, this);

        this.events.on('transitionstart', function (fromScene, duration) {
            if (fromScene === this.scene.get('gameScene')) {

                // this.tweens.add({
                //     delay: 100,
                //     targets: [this.background],
                //     durantion: 5000,
                //     alpha: { start: 0.45, to: 1 },
                //     ease: "Linear",
                // });

                this.miniLogo.x += game.config.width;
                this.voltaMenu.x += game.config.width;
                this.gameWinner.x += game.config.width;

                this.tweens.add({
                    delay: 0,
                    targets: [this.gameWinner, this.voltaMenu, this.miniLogo],
                    x: '-=' + game.config.width,
                    duration: 1000,
                    ease: 'power2',

                });
            }
        }, this);

    }
}