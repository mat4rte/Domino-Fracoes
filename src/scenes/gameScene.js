let pos2Grid;
let pieces;
let piecesNums;
let piecesValues;
let table;
let firstMove;
let piecesHuman;
let piecesBots;
let turno;
let outPiece;
let rotate180;
let lD;
let lE;
let jogoADecorrer;
let playedPieces; //0 - p1 | 1 - p2 |  2 - b1 | 3 - b2 | 4 - b3
let baralho = [];
let baralhoSize;
let ordBots = [1, 2, 0]; //bots consoante num de player. 2 player -> [1] | 3 player -> [1,0] | 4 player -> [1, 0, 2]
let esqH = 0;
let dirH = 0;
let esqB;
let dirB;
let jogou;

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

class gameScene extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    /*
      data: { dificulty: 1 | 2 | 3,
              numPlayer: 2 | 3 | 4}
      */

    init(data) {
        this.a1 = data.a1;
        this.a2 = data.a2;
        this.b1 = data.b1;
        this.b2 = data.b2;

        this.dificulty = data.dificulty;
        this.numPlayers = data.numPlayers;
        this.registry.set("putLeft", false);
        this.registry.set("putRight", false);

        pos2Grid = new Map();
        pieces = [];
        table = new DoublyLinkedList(0);
        piecesNums = [...Array(28).keys()];
        piecesValues = [];
        piecesHuman = [];
        piecesBots = [];
        firstMove = true;
        turno = 0;
        outPiece = {};
        rotate180 = false;
        lD = 0;
        lE = 0;
        jogoADecorrer = false;
        playedPieces = [0, 0, 0, 0, 0];
        esqH = 0;
        dirH = 0;
        esqB = [0, 0];
        dirB = [0, 0];

        piecesValues[0] = [0, 9 / 12];
        piecesValues[1] = [2 / 2, 4 / 8];
        piecesValues[2] = [3 / 4, 3 / 3];
        piecesValues[3] = [6 / 9, 3 / 12];
        piecesValues[4] = [2 / 4, 1 / 3];
        piecesValues[5] = [6 / 8, 3 / 6];
        piecesValues[6] = [1 / 4, 2 / 3];
        piecesValues[7] = [2 / 3, 6 / 8];
        piecesValues[8] = [2 / 8, 8 / 12];
        piecesValues[9] = [2 / 6, 2 / 2];
        piecesValues[10] = [3 / 3, 2 / 4];
        piecesValues[11] = [4 / 12, 4 / 16];
        piecesValues[12] = [1 / 3, 1 / 4];
        piecesValues[13] = [4 / 8, 3 / 9];
        piecesValues[14] = [9 / 12, 8 / 16];
        piecesValues[15] = [4 / 4, 4 / 12];
        piecesValues[16] = [3 / 12, 1 / 2];
        piecesValues[17] = [4 / 6, 3 / 4];
        piecesValues[18] = [12 / 16, 6 / 12];
        piecesValues[19] = [8 / 16, 1];
        piecesValues[20] = [3 / 6, 2 / 8];
        piecesValues[21] = [3 / 9, 4 / 6];
        piecesValues[22] = [4 / 16, 6 / 6];
        piecesValues[23] = [1 / 2, 2 / 6];
        piecesValues[24] = [8 / 12, 12 / 16];
        piecesValues[25] = [1, 4 / 4];
        piecesValues[26] = [6 / 12, 0];
        piecesValues[27] = [6 / 6, 6 / 9];

        pos2Grid.set(-27, [100]);
        pos2Grid.set(-26, [98]);
        pos2Grid.set(-25, [96]);
        pos2Grid.set(-24, [94]);
        pos2Grid.set(-23, [92]);
        pos2Grid.set(-22, [90]);
        pos2Grid.set(-21, [88]);
        pos2Grid.set(-20, [107.5, 0.09, 0.78]); // Special
        pos2Grid.set(-19, [130]);
        pos2Grid.set(-18, [132]);
        pos2Grid.set(-17, [134]);
        pos2Grid.set(-16, [136]);
        pos2Grid.set(-15, [138]);
        pos2Grid.set(-14, [140]);
        pos2Grid.set(-13, [142]);
        pos2Grid.set(-12, [164.5, 0.91, 0.78]); // Special
        pos2Grid.set(-11, [184]);
        pos2Grid.set(-10, [182]);
        pos2Grid.set(-9, [180]);
        pos2Grid.set(-8, [178]);
        pos2Grid.set(-7, [176]);
        pos2Grid.set(-6, [174]);
        pos2Grid.set(-5, [172]);
        pos2Grid.set(-4, [191.5, 0.09, 0.78]); // Special
        pos2Grid.set(-3, [214]);
        pos2Grid.set(-2, [216]);
        pos2Grid.set(-1, [218]);
        pos2Grid.set(0, [220]);
        pos2Grid.set(1, [222]);
        pos2Grid.set(2, [224]);
        pos2Grid.set(3, [226]);
        pos2Grid.set(4, [248.5, 0.91, 0.22]); // Special
        pos2Grid.set(5, [268]);
        pos2Grid.set(6, [266]);
        pos2Grid.set(7, [264]);
        pos2Grid.set(8, [262]);
        pos2Grid.set(9, [260]);
        pos2Grid.set(10, [258]);
        pos2Grid.set(11, [256]);
        pos2Grid.set(12, [275.5, 0.91, 0.22]); // Special
        pos2Grid.set(13, [298]);
        pos2Grid.set(14, [300]);
        pos2Grid.set(15, [302]);
        pos2Grid.set(16, [304]);
        pos2Grid.set(17, [306]);
        pos2Grid.set(18, [308]);
        pos2Grid.set(19, [310]);
        pos2Grid.set(20, [312, 0.91, 0.22]); // Special
        pos2Grid.set(21, [352]);
        pos2Grid.set(22, [350]);
        pos2Grid.set(23, [348]);
        pos2Grid.set(24, [346]);
        pos2Grid.set(25, [344]);
        pos2Grid.set(26, [342]);
        pos2Grid.set(27, [340]);
    }

    create() {
        var gridConfig = {
            scene: this,
            cols: 21,
            rows: 21,
        };

        console.log("DIF: " + this.dificulty, "NUM: " + this.numPlayers);

        this.aGrid = new AlignGrid(gridConfig);
        this.backgroundGame = this.add.image(0, 0, "backgroundGame");
        this.aGrid.placeAtIndex(220, this.backgroundGame);
        this.backgroundGame.setScale(1.57);
        this.backgroundGame.depth = 0;

        //-----------SKIP------------
        this.skip = this.add.image(0, 0, "btSkip");
        this.aGrid.placeAtIndex(375.5, this.skip);
        this.skip.setScale(0.3);
        this.skip.setVisible(false);

        this.skip.setInteractive({ useHandCursor: true });
        this.skip.on("pointerup", function (pointer) {
            // console.log("SKIP!!!!");
            this.skip.setVisible(false);
            this.jogou = true;
            this.changeTurn();
        }, this
        );
        //----------------------------

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
        this.textoScore.setOrigin(0.67, 0.8);
        this.aGrid.placeAtIndex(86, this.textoScore);

        this.textoScore2 = this.add.text(x, y, this.b1 + " - " + this.b2, {
            fontFamily: 'Quicksand',
            fontSize: '48px',
            color: '#f1e30a',
            fontStyle: 'normal',
            shadow: { stroke: false, fill: true, color: '#f1e30a', blur: -3, offsetX: null, offsetY: 3 }
        })
        this.textoScore2.setVisible(true);
        this.textoScore2.setOrigin(0.67, 0.8);
        this.aGrid.placeAtIndex(88, this.textoScore2);


        this.texto = this.add.text(x, y, 'Clica numa peça dómino à tua escolha!', {
            fontFamily: 'Quicksand',
            fontSize: '48px',
            color: '#FFFFFF',
            fontStyle: 'normal',
            shadow: { stroke: false, fill: true, color: '#6A2200', blur: -3, offsetX: null, offsetY: 3 }
        })
        this.texto.setVisible(false);
        this.texto.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(220, this.texto);

        this.pecaEmpty = this.add.image(0, 0, 'pecaBranca');
        this.aGrid.placeAtIndex(220, this.pecaEmpty);
        this.pecaEmpty.setVisible(false);

        this.back2 = this.add.image(0, 0, "voltaMenu");
        this.back2.setScale(0.6);
        this.back2.setOrigin(.2, -0.7);
        this.aGrid.placeAtIndex(336, this.back2);

        this.miniLogo = this.add.image(0, 0, "titulopeq");
        this.miniLogo.setScale(1.2);
        this.aGrid.placeAtIndex(45, this.miniLogo);


        for (let i = 0; i < 28; i++) {
            pieces[i] = this.add.sprite(50000, 50000, "piece".concat(i + 1));
            pieces[i].setTexture("pecaBranca");
            this.aGrid.placeAtIndex(220, pieces[i]);
        }

        //------------ Baralho -----------
        baralhoSize = 0;
        this.baralho = this.add.image(0, 0, "baralho");
        this.baralho.setScale(1.14);
        this.baralho.setOrigin(0, 0.3);
        this.baralho.setVisible(false);
        this.aGrid.placeAtIndex(60.4, this.baralho);

        this.baralho.setInteractive({ useHandCursor: true });
        this.baralho.on("pointerup", function (pointer) {
            this.apanhaPeca(0, true).then(i => {
                //nao tem movimentos
                // console.log(i);
                if (!this.anyMovementLeft(0, true)) {
                    //nao ha baralho
                    if (baralhoSize == 0) {
                        this.baralho.setVisible(false);
                        // if (!this.anyMovementLeft(0, true))
                        this.skip.setVisible(true);
                    }
                    // console.log("sem movs e com baralho");
                    //Se nao ha movimentos e ainda tem peças
                }
                //ha movimentos
                else {
                    // console.log("TEM MOVIMENTOS")
                    this.baralho.disableInteractive()
                }
            });
            // this.baralho.setVisible(false);
        }, this
        );
        //-------------------------------

        // pieces = pieces.sort(() => Math.random() - 0.5);
        piecesNums = piecesNums.sort(() => Math.random() - 0.5);

        //----------------------------------


        //----------- BOTAO START ----------
        //alterar imagem do start

        // this.start = this.add.image(0, 0, "btPlay");
        // this.start.setScale(1.0);
        // this.aGrid.placeAtIndex(220, this.start);

        // this.start.setInteractive({ useHandCursor: true });
        // this.start.on("pointerup", function (pointer) {
        //     this.choosePieces();
        //     this.setPieceAnimation(0);
        //     this.start.setVisible(false);
        //     // this.skip.setVisible(false);
        // }, this
        // );

        //----------------------------------


        // --------------- Back --------------------

        this.back2.setInteractive({ useHandCursor: true });
        this.back2.on("pointerover", () => {
            this.back2.displayHeight += 5;
            this.back2.displayWidth += 5;
        });
        this.back2.on("pointerout", () => {
            this.back2.displayHeight -= 5;
            this.back2.displayWidth -= 5;
        });
        //------------------------------------------

        // --------------- Transicoes --------------------
        this.back2.on(
            "pointerup",
            function (pointer) {
                this.backgroundGame.alpha = 0;
                this.tweens.add({
                    targets: [
                        this.textoScore, this.textoScore2,
                        this.miniLogo,
                        this.back2,
                        this.start,
                        pieces[0],
                        pieces[1],
                        pieces[2],
                        pieces[3],
                        pieces[4],
                        pieces[5],
                        pieces[6],
                        pieces[7],
                        pieces[8],
                        pieces[9],
                        pieces[10],
                        pieces[11],
                        pieces[12],
                        pieces[13],
                        pieces[14],
                        pieces[15],
                        pieces[16],
                        pieces[17],
                        pieces[18],
                        pieces[19],
                        pieces[20],
                        pieces[21],
                        pieces[22],
                        pieces[23],
                        pieces[24],
                        pieces[25],
                        pieces[26],
                        pieces[27],
                        this.skip,
                        this.baralho,
                        this.pecaEmpty,
                        this.texto,
                    ],
                    delay: 100,
                    durantion: 1000,
                    x: "+=" + game.config.width,
                    ease: "power2",
                });
                this.scene.transition({
                    target: "preGameScene",
                    duration: 1000,
                    moveBelow: true,
                });
            },
            this
        );

        // got here from ...
        this.events.on(
            "transitionstart",
            function (fromScene, duration) {
                if (fromScene === this.scene.get("preGameScene")) {
                    // this.tweens.add({
                    //     delay: 100,
                    //     targets: [this.backgroundGame],
                    //     durantion: 5000,
                    //     alpha: { start: 0.45, to: 1 },
                    //     ease: "Linear",
                    // });
                    this.miniLogo.x += game.config.width;
                    this.start.x += game.config.width;
                    this.back2.x += game.config.width;
                    this.baralho.x += game.config.width;
                    this.pecaEmpty.x += game.config.width;
                    this.texto.x += game.config.width;
                    this.textoScore.x += game.config.width;
                    this.textoScore2.x += game.config.width;
                    for (let i = 0; i < pieces.length; i++) {
                        pieces[i].x += game.config.width;
                    }

                    this.tweens.add({
                        delay: 100,
                        targets: [this.textoScore, this.textoScore2,
                        this.miniLogo,
                        this.back2,
                        this.start,
                        pieces[0],
                        pieces[1],
                        pieces[2],
                        pieces[3],
                        pieces[4],
                        pieces[5],
                        pieces[6],
                        pieces[7],
                        pieces[8],
                        pieces[9],
                        pieces[10],
                        pieces[11],
                        pieces[12],
                        pieces[13],
                        pieces[14],
                        pieces[15],
                        pieces[16],
                        pieces[17],
                        pieces[18],
                        pieces[19],
                        pieces[20],
                        pieces[21],
                        pieces[22],
                        pieces[23],
                        pieces[24],
                        pieces[25],
                        pieces[26],
                        pieces[27],
                        this.baralho,
                        this.pecaEmpty,
                        this.texto,
                        ],
                        durantion: 1000,
                        x: "-=" + game.config.width,
                        ease: "Power2",
                    });
                }
            },
            this
        );

        // this.aGrid.show();
        // this.aGrid.showNumbers();

        this.start();


    }

    start() {
        this.choosePieces();
        this.setPieceAnimation(0);
    }

    setPieceAnimation(playerN) {

        for (let i = 0; i < baralhoSize; i++) {
            //Efeito pÃ´r rato
            pieces[baralho[i]].setInteractive({ useHandCursor: true });
            pieces[baralho[i]].on("pointerover", () => {
                pieces[baralho[i]].y -= 15;
            });
            pieces[baralho[i]].on("pointerout", () => {
                pieces[baralho[i]].y += 15;
            });
            //No Clique
            pieces[baralho[i]].on(
                "pointerup",
                function (pointer) {

                    this.placePiece(baralho[i], true).then((j => {
                        if (j) {
                            pieces[baralho[i]].y += 15;
                            pieces[baralho[i]].removeInteractive({
                                useHandCursor: true,
                            });
                            //piecesHuman[playerN].splice(i, 1);
                            playedPieces[playerN] += 1;
                            if (!this.isGameFinished()) this.botPlay();
                        }

                    }))
                },
                this
            );
            pieces[baralho[i]].disableInteractive();
        }

        for (let i = 0; i < piecesHuman[playerN].length; i++) {
            //Efeito pÃ´r rato
            pieces[piecesHuman[playerN][i]].setInteractive({ useHandCursor: true });
            pieces[piecesHuman[playerN][i]].on("pointerover", () => {
                pieces[piecesHuman[playerN][i]].y -= 15;
            });
            pieces[piecesHuman[playerN][i]].on("pointerout", () => {
                pieces[piecesHuman[playerN][i]].y += 15;
            });
            //No Clique
            pieces[piecesHuman[playerN][i]].on(
                "pointerup",
                function (pointer) {

                    this.placePiece(piecesHuman[playerN][i], true).then((j => {
                        if (j) {
                            pieces[piecesHuman[playerN][i]].y += 15;
                            pieces[piecesHuman[playerN][i]].removeInteractive({
                                useHandCursor: true,
                            });
                            //piecesHuman[playerN].splice(i, 1);
                            playedPieces[playerN] += 1;
                            if (!this.isGameFinished()) this.botPlay();
                        }

                    }))
                },
                this
            );
        }
    }

    disableInteractive() {
        for (let i = 0; i < piecesHuman[0].length; i++) {
            if (pieces[piecesHuman[0][i]].jogada == false) {
                // console.log("Desativa interactive " + piecesHuman[0][i]);
                pieces[piecesHuman[0][i]].disableInteractive({ useHandCursor: true });
            }
        }
    }

    enableInteractive() {
        for (let i = 0; i < piecesHuman[0].length; i++) {
            if (pieces[piecesHuman[0][i]].jogada == false) {
                // console.log("Ativa interactive " + piecesHuman[0][i]);
                pieces[piecesHuman[0][i]].setInteractive();
            }
        }
    }

    async botPlay() {
        this.disableInteractive();
        //For loop para cada bot jogar
        for (let i = 0; i < this.numPlayers - 1; i++) {
            // this.soloBot(i);
            this.jogou = false;
            // console.log("JOGOU ? : ", this.jogou);
            this.tweens.add({
                targets: this.skip,
                x: this.skip.x,
                delay: 1000 * (i + 1),
                onComplete: () => {

                    if (this.dificulty == 1) {
                        if (this.numPlayers != 4)
                            this.soloBotEasy(ordBots[i]);
                        else
                            this.soloBotEasy(i);
                    }
                    else if (this.dificulty == 2) {
                        if (this.numPlayers != 4)
                            this.soloBotMedium(ordBots[i]);
                        else
                            this.soloBotMedium(i);
                    }
                    // else if (this.dificulty == 3) {
                    //     if (this.numPlayers != 4)
                    //         this.soloBotHard(ordBots[i]);
                    //     else
                    //         this.soloBotHard(i);
                    // }

                }
            })
            // console.log("JOGOU 2? : ", this.jogou);
            while (this.jogou != true) {
                // console.log("à espera ", this.jogou, i, this.anyMovementLeft(i, false));
                await sleep(300);
            }
            if (this.isGameFinished())
                return 1;
            // console.log("JOGOU 3? : ", this.jogou);

        }
        // console.log("what " + this.numPlayers);
        // console.log("num: " + this.numPlayers);77
        // console.log("dw", !this.anyMovementLeft(0, true));
        if (!this.anyMovementLeft(0, true)) {
            if (baralhoSize == 0) {
                this.skip.setVisible(true);
            }
            else {
                // console.log("TA AQUI");
                this.baralho.setInteractive({ useHandCursor: true });
            }
        }
        // console.log("BARALHOSIZE: ", baralhoSize);
        // console.log("VEZ do jog");
        //vez do jogador
        this.enableInteractive();

        // this.anyMovementLeft(0, true);
    }

    async apanhaPeca(indexBot, isPlayer) {

        let pecaTopo = baralho[0 + baralho.length - baralhoSize];
        baralhoSize--;
        pieces[pecaTopo].setScale(1);
        pieces[pecaTopo].setVisible(true);
        // console.log("BOT: " + indexBot + "Apanhou Peca " + pecaTopo);
        if (isPlayer) {
            piecesHuman[0].push(pecaTopo);

            let index;
            if (piecesHuman[0].length % 2 == 0) {
                dirH++;
                // console.log("Direita");
                index = 364 + (6 + dirH) * 1.1;
            }
            else {
                esqH++;
                // console.log("Esquerda");
                index = 364 - (esqH) * 1.1;
            }
            pieces[piecesHuman[0][piecesHuman[0].length - 1]].setVisible(true);
            // console.log(piecesHuman[0][i]);
            let pieceTexture = "piece" + (piecesHuman[0][piecesHuman[0].length - 1] + 1);
            pieces[piecesHuman[0][piecesHuman[0].length - 1]].jogada = false;
            pieces[piecesHuman[0][piecesHuman[0].length - 1]].setTexture(String(pieceTexture));
            this.tweens.add({
                targets: pieces[piecesHuman[0][piecesHuman[0].length - 1]],
                x: (index % 21) * (2048 / 21) + 2048 / 21 / 2,
                y: Math.floor(index / 21) * (1200 / 21) + 1200 / 21 / 2,
                angle: pieces[piecesHuman[0][piecesHuman[0].length - 1]].angle + 360,
                scale: pieces[piecesHuman[0][piecesHuman[0].length - 1]].scale,
                duration: 1700,
                ease: "power2",
                onComplete: () => {
                    this.aGrid.placeAtIndex(index, pieces[piecesHuman[0][piecesHuman[0].length - 1]]);
                    pieces[piecesHuman[0][piecesHuman[0].length - 1]].setInteractive({ useHandCursor: true });
                }
                ,
            });
        }
        else {
            let index;
            piecesBots[indexBot].push(pecaTopo);
            switch (indexBot) {
                //bot cima
                case 1:
                    if (piecesBots[indexBot].length % 2 == 0) {
                        dirB[0]++;
                        // console.log("Direita");
                        index = 50.3 + (6 + dirB[0]) * 0.57;
                    }
                    else {
                        esqB[0]++;
                        // console.log("Esquerda");
                        index = 50.3 - esqB[0] * 0.57;
                    }
                    break;
                //bot direita
                case 2:
                    if (piecesBots[indexBot].length % 2 == 0) {
                        dirB[1]++;
                        // console.log("Direita");
                        index = 145 + 21 * 6 + dirB[1] * 21;
                    }
                    else {
                        esqB[1]++;
                        // console.log("Esquerda");
                        index = 145 - 21 * esqB[1];
                    }
                    // index = 145 + 21 * piecesBots[indexBot].length;
                    pieces[pecaTopo].angle = -90;
                    break;
            }

            let tam = piecesBots[indexBot].length;

            pieces[piecesBots[indexBot][piecesBots[indexBot].length - 1]].setScale(0.5);
            this.tweens.add({
                targets: pieces[pecaTopo],
                x: (index % 21) * (2048 / 21) + 2048 / 21 / 2,
                y: Math.floor(index / 21) * (1200 / 21) + 1200 / 21 / 2,
                angle: pieces[pecaTopo].angle + 360,
                scale: pieces[pecaTopo].scale,
                duration: 1700,
                ease: "power2",
            });
        }
        if (baralhoSize == 0) {
            this.baralho.setVisible(false);
        }

        console.log("FIM APANHA");
        return 1;
    }

    soloBotEasy(indexBot) {
        //For loop para verificar a primeira peca que pode jogar
        for (let j = 0; j < piecesBots[indexBot].length; j++) {
            //Verificacao se a peca pode ser jogar
            if (this.validMove(piecesBots[indexBot][j], "left") != -1) {
                //Verificacao se a peca ja foi jogada
                if (pieces[piecesBots[indexBot][j]].jogada == false) {
                    this.placePiece(piecesBots[indexBot][j], false);
                    playedPieces[indexBot + 2] += 1;
                    // piecesBots[indexBot].splice(j, 1);
                    return 1;
                }
            }
            else if (this.validMove(piecesBots[indexBot][j], "right") != -1) {
                if (pieces[piecesBots[indexBot][j]].jogada == false) {
                    this.placePiece(piecesBots[indexBot][j], false);
                    playedPieces[indexBot + 2] += 1;
                    // piecesBots[indexBot].splice(j, 1);
                    return 1;
                }
            }
        }

        //ciclo que verifica se consegue encaixar para cada peça que apanha
        //ve se tem pecas no baralho
        if (baralhoSize > 0) {
            this.apanhaPeca(indexBot, false).then(() => {
                this.tweens.add({
                    targets: this.skip,
                    x: this.skip.x,
                    delay: 2000,
                    onComplete: () => {
                        this.soloBotEasy(indexBot);
                    }
                })
            })
        }
        else {
            this.jogou = true;
        }

    }

    soloBotMedium(indexBot) {

        let listaOrd = [];
        for (let i = 0; i < piecesBots[indexBot].length; i++) {
            listaOrd.push(piecesBots[indexBot][i]);
        }

        listaOrd.sort((a, b) => {
            if ((piecesValues[a][0] + piecesValues[a][1]) >= (piecesValues[b][0] + piecesValues[b][1]))
                return -1;
            else return 1;
        })

        for (let j = 0; j < listaOrd.length; j++) {
            //Verificacao se a peca pode ser jogar
            if (this.validMove(listaOrd[j], "left") != -1) {
                //Verificacao se a peca ja foi jogada
                if (pieces[listaOrd[j]].jogada == false) {
                    this.placePiece(listaOrd[j], false);
                    playedPieces[indexBot + 2] += 1;
                    return 1;
                }
            }
            else if (this.validMove(listaOrd[j], "right") != -1) {
                if (pieces[listaOrd[j]].jogada == false) {
                    this.placePiece(listaOrd[j], false);
                    playedPieces[indexBot + 2] += 1;
                    return 1;
                }
            }
        }

        if (baralhoSize > 0) {
            this.apanhaPeca(indexBot, false).then(() => {
                this.tweens.add({
                    targets: this.skip,
                    x: this.skip.x,
                    delay: 2000,
                    onComplete: () => {
                        this.soloBotMedium(indexBot);
                    }
                })
            })
        }
        else this.jogou = true;
    }


    quantos(num, indexBot) {

        for (let i = 0; i < piecesBots[indexBot].length; i++) {

            if (piecesValues[num]) {

            }


        }

    }

    soloBotHard(indexBot) {

        let listaOrd = [];
        for (let i = 0; i < piecesBots[indexBot].length; i++) {
            listaOrd.push(piecesBots[indexBot][i]);
        }



        listaOrd.sort((a, b) => {
            if ((piecesValues[a][0] + piecesValues[a][1]) >= (piecesValues[b][0] + piecesValues[b][1]))
                return -1;
            else return 1;
        })

        for (let j = 0; j < listaOrd.length; j++) {
            //Verificacao se a peca pode ser jogar
            if (this.validMove(listaOrd[j], "left") != -1) {
                //Verificacao se a peca ja foi jogada
                if (pieces[listaOrd[j]].jogada == false) {
                    this.placePiece(listaOrd[j], false);
                    playedPieces[indexBot + 2] += 1;
                    return 1;
                }
            }
            else if (this.validMove(listaOrd[j], "right") != -1) {
                if (pieces[listaOrd[j]].jogada == false) {
                    this.placePiece(listaOrd[j], false);
                    playedPieces[indexBot + 2] += 1;
                    return 1;
                }
            }
        }

        if (baralhoSize > 0) {
            this.apanhaPeca(indexBot, false).then(() => {
                this.tweens.add({
                    targets: this.skip,
                    x: this.skip.x,
                    delay: 2000,
                    onComplete: () => {
                        this.soloBotMedium(indexBot);
                    }
                })
            })
        }
        else this.jogou = true;

    }


    //Escolher peÃ§as do baralho para a mÃ£o
    choosePieces() {

        let index;
        for (let j = 0; j < this.numPlayers - 1; j++) {
            //esq 0
            piecesBots[ordBots[j]] = [];

            //MÃ£o aleatÃ³ria Jog 1
            for (let i = 0; i < 7; i++) {
                piecesBots[ordBots[j]][i] = piecesNums[i + 7 * j];
                pieces[piecesBots[ordBots[j]][i]].jogada = false;
                switch (ordBots[j]) {
                    //bot esquerda
                    case 0: index = 127 + 21 * i;
                        pieces[piecesBots[ordBots[j]][i]].angle = 90;
                        break;
                    //bot cima
                    case 1: index = 50.3 + i * 0.57;
                        break;
                    //bot direita
                    case 2: index = 145 + 21 * i;
                        pieces[piecesBots[ordBots[j]][i]].angle = -90;

                        break;
                }

                // console.log("BOT ", ordBots[j], index);
                pieces[piecesBots[ordBots[j]][i]].setScale(0.5);

                this.tweens.add({
                    delay: 1500,
                    targets: pieces[piecesBots[ordBots[j]][i]],
                    x: (index % 21) * (2048 / 21) + 2048 / 21 / 2,
                    y: Math.floor(index / 21) * (1200 / 21) + 1200 / 21 / 2,
                    angle: pieces[piecesBots[ordBots[j]][i]].angle + 360,
                    scale: pieces[piecesBots[ordBots[j]][i]].scale,
                    duration: 1700,
                    ease: "power2",
                });
            }

            // console.log("Bot: " + piecesBots[ordBots[j]]);
        }

        //14 - 21 | 7 - 21
        baralho = [];
        for (let i = 7 * (this.numPlayers - 1); i < 21; i++) {
            baralhoSize++;
            let pos = i - 7 * (this.numPlayers - 1);
            baralho.push(piecesNums[i]);
            pieces[baralho[pos]].jogada = false;
            index = 62 - i * 0.04
            this.tweens.add({
                delay: 1500,
                targets: pieces[baralho[pos]],
                x: (index % 21) * (2048 / 21) + 2048 / 21 / 2,
                y: Math.floor(index / 21) * (1200 / 21) + 1200 / 21 / 2 + i,
                angle: pieces[baralho[pos]].angle + 360,
                scale: pieces[baralho[pos]].scale,
                duration: 1700,
                ease: "power2",
                onComplete: () => {
                    pieces[baralho[pos]].setVisible(false);
                    this.baralho.setVisible(true);
                    if (!this.anyMovementLeft(0, true)) {
                        this.baralho.disableInteractive();
                    }
                },
            });

        }
        // baralhoSize = 0;
        // console.log("Baralho: " + baralho);

        piecesHuman[0] = [];
        //MÃ£o aleatÃ³ria Jog 1 Baixo
        for (let i = 0; i < 7; i++) {
            piecesHuman[0][i] = piecesNums[i + 21];
            // console.log(piecesHuman[0][i]);
            let pieceTexture = "piece" + (piecesHuman[0][i] + 1);
            pieces[piecesHuman[0][i]].jogada = false;
            pieces[piecesHuman[0][i]].setTexture(String(pieceTexture));

            let index = 364 + i * 1.1;
            this.tweens.add({
                delay: 1500,
                targets: pieces[piecesHuman[0][i]],
                x: (index % 21) * (2048 / 21) + 2048 / 21 / 2,
                y: Math.floor(index / 21) * (1200 / 21) + 1200 / 21 / 2,
                angle: pieces[piecesHuman[0][i]].angle + 360,
                scale: pieces[piecesHuman[0][i]].scale,
                duration: 1700,
                ease: "power2",
                onComplete: () => {
                    this.texto.setVisible(true);
                    this.aGrid.placeAtIndex(index, pieces[piecesHuman[0][i]]);
                }
            });

        }
        // console.log("human", piecesHuman[0]);

    }

    changeTurn() {
        this.botPlay();
        // this.checkPlay();
    }

    checkPlay() {
        for (let i = 0; i < piecesHuman[0].length; i++) {
            if (this.validMove(piecesHuman[0][i], "left") != -1) {
                if (pieces[piecesHuman[0][i]].jogada == false) {
                    // pieces[piecesHuman[0][i]].setPipeline('Light2D');
                    // console.log(i);
                }
            } else if (this.validMove(piecesHuman[0][i], "right") != -1) {
                if (pieces[piecesHuman[0][i]].jogada == false) {
                    // console.log(i);
                    // pieces[piecesHuman[0][i]] = this.add.image(50000, 50000, "piece".concat(i + 1)).setTint(0xff00ff);
                }
            }
        }
    }

    //Verifica se peÃ§a pode ser colocada
    validMove(newPiece, side) {
        //[0] Valor da peÃ§a baixo
        //[1] Valor da peÃ§a cima
        rotate180 = false;
        if (
            outPiece[side] == piecesValues[newPiece][0] &&
            pieces[newPiece].jogada == false
        ) {
            if (side == "left") {
                rotate180 = true;
            }
            return piecesValues[newPiece][1];
        } else if (
            outPiece[side] == piecesValues[newPiece][1] &&
            pieces[newPiece].jogada == false
        ) {
            if (side == "right") {
                rotate180 = true;
            }

            return piecesValues[newPiece][0];
        } else {
            return -1;
        }
    }

    anyMovementLeft(index, isPlayer) {
        // Ver se jog 1 tem jogadas disponiveis
        if (isPlayer) {
            // console.log("----------");
            for (let j = 0; j < piecesHuman[0].length; j++) {
                // if(pieces[piecesHuman[index][j]].jogada == false)
                if (this.validMove(piecesHuman[index][j], "left") != -1 || this.validMove(piecesHuman[index][j], "right") != -1) {
                    // console.log("PECA QUE PODE POR", isPlayer, piecesHuman[index][j]);
                    return 1;
                } else {
                    // console.log(isPlayer, piecesHuman[index][j]);
                    continue;
                }
            }
            return 0;
        } else {
            // console.log("Index", index);
            // console.log("PIECES: ", piecesBots);
            for (let j = 0; j < piecesBots[index].length; j++) {
                if (
                    this.validMove(piecesBots[index][j], "left") != -1 ||
                    this.validMove(piecesBots[index][j], "right") != -1
                ) {
                    return 1;
                } else continue;
            }

            return 0;
        }
    }


    //Verifica se jogo terminou, algum jogador ficou sem peÃ§as na sua mÃ£o
    isGameFinished() {

        let i = 0;
        //Jogador 1
        for (i = 0; i < piecesHuman[0].length; i++) {
            if (pieces[piecesHuman[0][i]].jogada == false)
                break;
        }

        // console.log("I ", i);

        if (i == piecesHuman[0].length) {
            // console.log("Ganhou Jog1!!!");
            this.gameFinished(1);
            return 1;
        }

        //Bots
        for (let j = 0; j < this.numPlayers - 1; j++) {
            for (i = 0; i < piecesBots[ordBots[j]].length; i++) {
                if (pieces[piecesBots[ordBots[j]][i]].jogada == false)
                    break;

            }
            if (i == piecesBots[ordBots[j]].length) {
                // console.log("Ganhou Bot " + ordBots[j]);
                this.gameFinished(ordBots[j] + 2);
                return 1;
            }
        }


        let empate = true;
        for (let j = 0; j < this.numPlayers - 1; j++) {
            if (this.anyMovementLeft(ordBots[j], false))
                empate = false;
        }

        // console.log("BOT : ", ordBots[0], "tem movs : ", this.anyMovementLeft(ordBots[0], false), "BSize:", baralhoSize, "Empate:", empate, "PL tem movs: ", !this.anyMovementLeft(0, true));
        if (empate == true && !this.anyMovementLeft(0, true) && baralhoSize == 0) {
            // console.log("Empate");
            this.gameFinished(5);
        }

    }

    //Evento quanto o jogo terminar
    gameFinished(num) {

        this.tweens.add({
            delay: 1200,
            targets: [
                this.miniLogo,
                this.back2,
                this.start,
                pieces[0],
                pieces[1],
                pieces[2],
                pieces[3],
                pieces[4],
                pieces[5],
                pieces[6],
                pieces[7],
                pieces[8],
                pieces[9],
                pieces[10],
                pieces[11],
                pieces[12],
                pieces[13],
                pieces[14],
                pieces[15],
                pieces[16],
                pieces[17],
                pieces[18],
                pieces[19],
                pieces[20],
                pieces[21],
                pieces[22],
                pieces[23],
                pieces[24],
                pieces[25],
                pieces[26],
                pieces[27],
                this.baralho,
            ],
            durantion: 2000,
            x: "-=" + game.config.width,
            ease: "Power2",
        });

        this.scene.transition({
            target: "endScene",
            delay: 500,
            duration: 1850,
            moveBelow: true,
            data: {
                winner: num, a1: this.a1, a2: this.a2, b1: this.b1, b2: this.b2, dificulty: this.dificulty, numPlayers: this.numPlayers
            },
        });
    }

    sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    async placePiece(piece, think) {
        // this.gameFinished(1);
        let sitio;
        rotate180 = false;
        let newOut;
        let newOutL;
        let newOutR;
        let pos = 0;


        this.texto.setVisible(false);

        if (firstMove == true) {
            table.changeHead(piece);
            firstMove = false;
            outPiece["left"] = piecesValues[piece][0];
            outPiece["right"] = piecesValues[piece][1];
            pieces[piece].angle = 0;
            // this.texto.setVisible(false);

        } else {
            newOutL = this.validMove(piece, "left");
            newOutR = this.validMove(piece, "right");

            //se pode por Ã  esquerda
            if (newOutL != -1) {

                if (think) {
                    // console.log("Jogadas P1 " + piecesHuman[0]);
                    // console.log("Jogadas B1 " + piecesBots[0]);
                    // console.log("Jogadas B2 " + piecesBots[1]);
                    // console.log("Jogadas B3 " + piecesBots[2]);
                    // console.log("Baralho: " + baralho + " BaralhoSize: " + baralhoSize);
                    // console.log("Jogou : " + piece);
                    // console.log("NEW OUT L | NEW OUT R" + newOutL + newOutR);
                    //se tbm pode por Ã  direita
                    if (newOutR != -1) {

                        newOutR = this.validMove(piece, "right");
                        let lado = { lado: "null" };
                        this.escolhe(lado);
                        this.disableInteractive();
                        while (lado.lado != "putRight" && lado.lado != "putLeft") {
                            await sleep(1000);
                        }
                        this.enableInteractive();
                        // console.log("Peça escolhida=", lado);
                        //se escolher esquerda
                        if (lado.lado == "putLeft") {
                            newOutL = this.validMove(piece, "left");
                            // console.log("joga Ã  esquerda");
                            sitio = "left";
                            table.prepend(piece);
                            pos = table.head.pos;
                            outPiece["left"] = newOutL;
                            pieces[piece].angle = 0;
                            lado.lado = "null";
                        }
                        //se escolher direita
                        else if (lado.lado == "putRight") {
                            // console.log("joga Ã  direita");
                            newOutR = this.validMove(piece, "right");
                            sitio = "right";
                            table.append(piece);
                            pos = table.tail.pos;
                            outPiece["right"] = newOutR;
                            pieces[piece].angle = 0;
                            lado.lado = "null";
                        }
                        // while (typeof lado === 'undefined') { };

                        //Bug mete sempre esquerda
                        // else console.log("ah" + lado);
                        // console.log("chegou!2");
                    }
                    //se for humano e nao consguir Ã  direita mas conseguir Ã  esquerda
                    else {
                        newOutL = this.validMove(piece, "left");
                        sitio = "left";
                        table.prepend(piece);
                        pos = table.head.pos;
                        outPiece["left"] = newOutL;
                        pieces[piece].angle = 0;
                    }
                }
                //se for bot e puder por Ã  esquerda
                else {
                    // console.log("Jogadas P1 " + piecesHuman[0]);
                    // console.log("Jogadas B1 " + piecesBots[0]);
                    // console.log("Jogadas B2 " + piecesBots[1]);
                    // console.log("Jogadas B3 " + piecesBots[2]);
                    // console.log("Baralho: " + baralho + " BaralhoSize: " + baralhoSize);
                    // console.log("Jogou : " + piece);
                    newOutL = this.validMove(piece, "left");
                    sitio = "left";
                    table.prepend(piece);
                    pos = table.head.pos;
                    outPiece["left"] = newOutL;
                    pieces[piece].angle = 0;
                }
            }
            //se nao pode pÃ´r esquerda
            else {
                // console.log("Jogadas P1 " + piecesHuman[0]);
                // console.log("Jogadas B1 " + piecesBots[0]);
                // console.log("Jogadas B2 " + piecesBots[1]);
                // console.log("Jogadas B3 " + piecesBots[2]);
                // console.log("Baralho: " + baralho + " BaralhoSize: " + baralhoSize);
                // console.log("Jogou : " + piece);
                //mas se poder por direira
                if (newOutR != -1) {
                    newOutR = this.validMove(piece, "right");
                    sitio = "right";
                    table.append(piece);
                    pos = table.tail.pos;
                    outPiece["right"] = newOutR;
                    pieces[piece].angle = 0;
                }
                //se nao puder por direita nem esquerda
                else {
                    this.jogou = true;
                    return 0;
                }
            }
        }
        // console.log("chegou2123!");

        let index = pos2Grid.get(pos);

        if (index.length == 1) {
            let pieceTexture = "piece" + (piece + 1);
            pieces[piece].setTexture(String(pieceTexture));
            //2, 3, 4,... jogada
            if (!firstMove) {
                //adicionar direita
                if (sitio == "right") {
                    //andar para direita
                    if (lD == 0 || lD % 2 == 0) {
                        if (rotate180) {
                            pieces[piece].angle = 180;
                        }
                    }
                    //andar para esquerda
                    else {
                        pieces[piece].angle += 180;
                        if (rotate180) {
                            pieces[piece].angle += 180;
                        }
                    }
                }
                //adicionar esquerda
                else if (sitio == "left") {
                    //andar para esquerda
                    if (lE == 0 || lE % 2 == 0) {
                        if (rotate180) {
                            pieces[piece].angle = 180;
                        }
                    }
                    //andar para direita
                    else {
                        pieces[piece].angle = 180;
                        if (rotate180) {
                            pieces[piece].angle += 180;
                        }
                    }
                }
            }
            pieces[piece].jogada = true;
            pieces[piece].angle += 90;
            pieces[piece].setScale(0.9);

            // console.log(pieces[piece].angle);

            this.tweens.add({
                targets: pieces[piece],
                x: (index % 21) * (2048 / 21) + 2048 / 21 / 2,
                y: Math.floor(index / 21) * (1200 / 21) + 1200 / 21 / 2,
                // delay: 3000,
                angle: pieces[piece].angle + 360,
                duration: 1700,
                ease: "power2",
                onComplete: () => {
                    // console.log(pieceTexture);
                    // this.load.image(pieces[piece], String(pieceTexture));
                    this.aGrid.placeAtIndex(index[0], pieces[piece]);
                },
            });

            // console.log(x, y);
            // console.log(pieces[piece].x, pieces[piece].y);
            // this.aGrid.placeAtIndex(index[0], pieces[piece]);
        } else {
            //peça do canto
            let pieceTexture = "piece" + (piece + 1);
            pieces[piece].setTexture(String(pieceTexture));
            if (rotate180) {
                pieces[piece].angle = 180;
            } else pieces[piece].angle = 0;
            if (sitio == "left") {
                lE += 1;
                pieces[piece].angle += 180;
            } else if (sitio == "right") {
                lD += 1;
                pieces[piece].angle += 180;
            }

            let x = (index[0] % 21) * (2048 / 21) + 2048 / 21 / 2;
            let y = Math.floor(index[0] / 21) * (1200 / 21) + 1200 / 21 / 2;
            // console.log(x, y);
            // console.log(pieces[piece].x, pieces[piece].y);

            let indice = index[0];
            pieces[piece].jogada = true;
            pieces[piece].setScale(0.9);
            // this.aGrid.index(indice).
            this.tweens.add({
                targets: pieces[piece],
                x: (indice % 21) * (2048 / 21) + 2048 / 21 / 2,
                y: Math.floor(indice / 21) * (1200 / 21) + 1200 / 21 / 2,
                // delay: 3000,
                angle: pieces[piece].angle + 360,
                duration: 1700,
                ease: "power2",
                onComplete: () => {
                    // this.textures.remove(pieces[piece]);
                    // this.load.image(pieces[piece], String(pieceTexture));
                    this.aGrid.placeAtIndex(index[0], pieces[piece]);
                },
            });
            // this.aGrid.placeAtIndex(index[0], pieces[piece]);
        }
        // this.botPlay();
        // table.printList();
        this.jogou = true;
        return 1;
    }

    escolhe(lado) {
        this.leftSpotArrow = this.add.image(0, 0, "placeLeft");
        this.aGrid.placeAtIndex(303, this.leftSpotArrow);

        this.leftSpotArrow.setScale(0.6);


        this.rightSpotArrow = this.add.image(0, 0, "placeRight");
        this.aGrid.placeAtIndex(305, this.rightSpotArrow);
        this.rightSpotArrow.setScale(0.6);

        this.leftSpotArrow.setVisible(true);
        this.rightSpotArrow.setVisible(true);

        this.leftSpotArrow.setInteractive({ useHandCursor: true });
        this.leftSpotArrow.on(
            "pointerup",
            function (pointer) {
                lado.lado = "putLeft";
                this.leftSpotArrow.setVisible(false);
                this.rightSpotArrow.setVisible(false);
                // rightSpotArrow.put = false;
                //console.log("NO CHOOSESCENE : " + this.registry.get('putLeft') + this.registry.get('putRight'));
            },
            this
        );

        this.leftSpotArrow.on("pointerover", () => {
            this.leftSpotArrow.displayHeight += 5;
            this.leftSpotArrow.displayWidth += 5;
        });
        this.leftSpotArrow.on("pointerout", () => {
            this.leftSpotArrow.displayHeight -= 5;
            this.leftSpotArrow.displayWidth -= 5;
        });

        this.rightSpotArrow.setInteractive({ useHandCursor: true });
        this.rightSpotArrow.on(
            "pointerup",
            function (pointer) {
                // this.rightSpotArrow.put = true;
                // this.leftSpotArrow.put = false;
                lado.lado = "putRight";
                this.leftSpotArrow.setVisible(false);
                this.rightSpotArrow.setVisible(false);
                //this.registry.set('putLeft', false);
                //this.registry.set('putRight', true);
                //console.log("NO CHOOSESCENE : " + this.registry.get('putLeft') + this.registry.get('putRight'));
            },
            this
        );

        this.rightSpotArrow.on("pointerover", () => {
            this.rightSpotArrow.displayHeight += 5;
            this.rightSpotArrow.displayWidth += 5;
        });
        this.rightSpotArrow.on("pointerout", () => {
            this.rightSpotArrow.displayHeight -= 5;
            this.rightSpotArrow.displayWidth -= 5;
        });
    }
}

// minimax(depth, maximizingPlayer) {

//     let estado = new DoublyLinkedList();

//     //se jogo acabou ou  d == 0
//     if (this.isGameFinished() || d == 0) {
//         return pontos;
//     }

//     //"eu"
//     if (maximizingPlayer) {
//         // ponto = re
//         //por cada peÃ§a jogavel
//         // for (let i = 0; i < moves.length; i++) {

//         // }

//     }
//     //oponentes
//     else {

//     }

// }
