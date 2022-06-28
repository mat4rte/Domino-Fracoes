class infoScene extends Phaser.Scene {


    constructor() {
        super({
            key: "infoScene"
        })
    }



    preload() { }


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

        this.back.setInteractive({ useHandCursor: true });
        this.back.on('pointerover', () => {
            this.back.displayHeight += 5;
            this.back.displayWidth += 5;
        });
        this.back.on('pointerout', () => {
            this.back.displayHeight -= 5;
            this.back.displayWidth -= 5;
        });

        this.back.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.title1, this.title2, this.ideiaText, this.ideiaTitle, this.developersTitle, this.developersText, this.direitos, this.version],
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

        this.aGrid.show();
        this.aGrid.showNumbers();
    }
}