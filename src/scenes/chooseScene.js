class chooseScene extends Phaser.Scene {


    constructor() {
        super({
            key: "chooseScene"
        })
    }

    preload() {

        let pause = this.game.scene.pause("gameScene");

    }


    create() {



        var gridConfig = {
            'scene': this,
            'cols': 21,
            'rows': 21
        }
        this.aGrid = new AlignGrid(gridConfig);
        this.game.scene.transparent = true;

        console.log("PRESSED LEFT (CHOOSE SCENE) :  " + this.registry.get('putLeft'));

        //-----------Setas Esq Dir-----------
        this.leftSpotArrow = this.add.image(0, 0, "back");
        this.aGrid.placeAtIndex(303, this.leftSpotArrow);
        // this.leftSpotArrow.setVisible(false);


        this.rightSpotArrow = this.add.image(0, 0, "back");
        this.aGrid.placeAtIndex(305, this.rightSpotArrow);
        // this.rightSpotArrow.setVisible(false);


        this.leftSpotArrow.setInteractive({ useHandCursor: true });
        this.leftSpotArrow.on('pointerup', function (pointer) {
            // this.leftSpotArrow.put = true;
            // this.rightSpotArrow.put = true;
            this.leftSpotArrow.setVisible(false);
            this.rightSpotArrow.setVisible(false);
            // rightSpotArrow.put = false;
            this.registry.set('putLeft', true);
            this.registry.set('putRight', false);


            console.log("NO CHOOSESCENE : " + this.registry.get('putLeft') + this.registry.get('putRight'));
            game.scene.resume("gameScene");
            game.scene.stop();
        }, this);

        this.leftSpotArrow.on('pointerover', () => {
            this.leftSpotArrow.displayHeight += 5;
            this.leftSpotArrow.displayWidth += 5;
        });
        this.leftSpotArrow.on('pointerout', () => {
            this.leftSpotArrow.displayHeight -= 5;
            this.leftSpotArrow.displayWidth -= 5;
        });

        this.rightSpotArrow.setInteractive({ useHandCursor: true });
        this.rightSpotArrow.on('pointerup', function (pointer) {
            // this.rightSpotArrow.put = true;
            // this.leftSpotArrow.put = false;
            this.leftSpotArrow.setVisible(false);
            this.rightSpotArrow.setVisible(false);
            this.registry.set('putLeft', false);
            this.registry.set('putRight', true);
            console.log("NO CHOOSESCENE : " + this.registry.get('putLeft') + this.registry.get('putRight'));
            game.scene.resume("gameScene");
            game.scene.stop();
        }, this);

        this.rightSpotArrow.on('pointerover', () => {
            this.rightSpotArrow.displayHeight += 5;
            this.rightSpotArrow.displayWidth += 5;
        });
        this.rightSpotArrow.on('pointerout', () => {
            this.rightSpotArrow.displayHeight -= 5;
            this.rightSpotArrow.displayWidth -= 5;
        });


        //----------------------------------

    }
}