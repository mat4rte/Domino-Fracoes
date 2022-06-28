class creditsScene extends Phaser.Scene {


    constructor() {
        super({
            key: "creditsScene"
        })
    }


    preload() { }


    //Colocar Texto e imagens necessárias
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

        this.back = this.add.image(0, 0, 'back');
        this.aGrid.placeAtIndex(211, this.back);

        this.title1 = this.add.image(0, 0, 'titulo');
        this.title2 = this.add.image(0, 0, 'titulo2');
        this.title1.setScale(1.6);
        this.aGrid.placeAtIndex(73, this.title1);
        this.title2.setScale(0.8);
        this.title2.setOrigin(0.65, 0.7);
        this.aGrid.placeAtIndex(29, this.title2);

        this.ideiaTitle = this.add.text(0, 0, 'Ideia:', { fontFamily: 'myfont2', fontSize: 50, color: '#403217' });

        this.ideiaText = this.add.text(0, 0, "---------------------", { fontFamily: 'myfont2', fontSize: 30, color: '#ffffff' });
        this.ideiaText.setOrigin(0.35, -0.5);

        this.devTitle = this.add.text(0, 0, "Desenvolvimento:", { fontFamily: 'myfont2', fontSize: 50, color: '#403217' });

        this.devText = this.add.text(0, 0, " Joel Pinto\n Leonor Caldas\n Diogo Rodrigues\n Tomás Valente", { fontFamily: 'myfont2', fontSize: 30, color: '#ffffff', align: 'left' });
        this.devText.setOrigin(0.5, -0.1);

        this.aGrid.placeAtIndex(173, this.ideiaTitle);
        this.aGrid.placeAtIndex(176, this.ideiaText);

        this.aGrid.placeAtIndex(236, this.devTitle);
        this.aGrid.placeAtIndex(241, this.devText);

        this.back.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.title1, this.title2, this.ideiaText, this.ideiaTitle, this.devTitle, this.devText, this.direitos, this.version],
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


        this.back.setInteractive({ useHandCursor: true });
        this.back.on('pointerover', () => {
            this.back.displayHeight += 5;
            this.back.displayWidth += 5;
        });
        this.back.on('pointerout', () => {
            this.back.displayHeight -= 5;
            this.back.displayWidth -= 5;
        });



        // got here from ...
        this.events.on('transitionstart', function (fromScene, duration) {

            this.title1.x += game.config.width;
            this.title2.x += game.config.width;
            this.ideiaTitle.x += game.config.width;
            this.ideiaText.x += game.config.width;
            this.devTitle.x += game.config.width;
            this.devText.x += game.config.width;

            this.tweens.add({
                delay: 100,
                targets: [this.title1, this.title2, this.ideiaTitle, this.ideiaText, this.devTitle, this.devText],
                durantion: 1000,
                x: '-=' + game.config.width,
                ease: 'Power2'
            });

        }, this);


        this.aGrid.show();
        this.aGrid.showNumbers();

    }
}