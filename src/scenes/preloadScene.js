/** 
 * Class Preloader Scene, to load all assets before game start
 */
class preloadScene extends Phaser.Scene {
  constructor() {
    super("preloadScene");
  }

  preload() {
    let x0 = this.game.config.width * 0.1;
    let xSize = this.game.config.width * 0.8;

    let y0 = this.game.config.height * 0.4;
    let ySize = this.game.config.height * 0.2;

    this.progressBarOut = this.add.graphics();
    this.progressBarIn = this.add.graphics();

    let rectout = new Phaser.Geom.Rectangle(x0, y0, xSize, ySize);
    let rectin = new Phaser.Geom.Rectangle(x0 + (xSize * 0.01), y0 + (ySize * 0.05), xSize - 2 * xSize * 0.01, ySize - 2 * ySize * 0.05);

    this.progressBarOut.fillStyle(0x38920e, 1);
    this.progressBarOut.fillRectShape(rectout);

    this.progressBarIn.fillStyle(0x48b814, 1);
    this.progressBarIn.fillRectShape(rectin);

    this.load.on('progress', (value) => {
      let rectin = new Phaser.Geom.Rectangle(x0 + (xSize * 0.01), y0 + (ySize * 0.05), value * (xSize - 2 * xSize * 0.01), ySize - 2 * ySize * 0.05);
      this.progressBarIn.clear();
      this.progressBarIn.fillStyle(0x48b814, 1);
      this.progressBarIn.fillRectShape(rectin);
    })

    // ---------- Start Screen ---------
    this.load.image("background", "assets/menu/backgroundRound.png");
    this.load.image("btPlay", "assets/menu/btPlay.png");
    this.load.image("btInfo", "assets/menu/btinfo.png");
    this.load.image("btCreditos", "assets/menu/btcreditos.png");
    this.load.image("creditos", "assets/menu/creditos.png");
    this.load.image("infoboard", "assets/menu/infoboard.png");
    this.load.image("btClose", "assets/menu/btclose.png");
    this.load.image("titulo", "assets/menu/titulo.png");
    this.load.image("titulo2", "assets/menu/titulo2.png");
    this.load.image("boneco", "assets/menu/boneconovo.png");
    this.load.image("titulopeq", "assets/menu/titulopeq.png");


    // ---------- Pre Game / difficulty  -----------
    this.load.image("againstComputer", "assets/preGameScene/againstComputer.png")
    this.load.image("2players", "assets/preGameScene/sel2player.png")
    this.load.image("3players", "assets/preGameScene/sel3player.png")
    this.load.image("4players", "assets/preGameScene/sel4player.png")
    this.load.image("back", "assets/preGameScene/back.png")
    this.load.image("facil", "assets/preGameScene/facil.png")
    this.load.image("medio", "assets/preGameScene/medio.png")
    this.load.image("dificil", "assets/preGameScene/dificil.png")

    // ---------- Game Scene ---------
    this.load.image("backgroundGame", "assets/menu/backgroundRound.png")
    this.load.image("btSkip", "assets/skip.png")
    this.load.image("cancelar", "assets/cancelar.png")
    this.load.image("placeLeft", "assets/placeLeft.png")
    this.load.image("placeRight", "assets/placeRight.png")

    // ---------- End Scene ----------

    this.load.image("fundoEnd", "assets/menu/backgroundRound.png");
    this.load.image("voltaMenu", "assets/EndScene/returnHome.png");
    this.load.image("winJog1", "assets/EndScene/parabens1.png");
    this.load.image("winBot1", "assets/EndScene/parabens2.png");
    this.load.image("winBot2", "assets/EndScene/parabens3.png");
    this.load.image("winBot3", "assets/EndScene/parabens4.png");
    this.load.image("winEmpate", "assets/EndScene/empate.png");


    // ---------- PIECES  -----------
    this.load.image("pecaBranca", "assets/pieces/pecaBranca.png");
    this.load.image("piece1", "assets/pieces/peca1.png");
    this.load.image("piece2", "assets/pieces/peca2.png");
    this.load.image("piece3", "assets/pieces/peca3.png");
    this.load.image("piece4", "assets/pieces/peca4.png");
    this.load.image("piece5", "assets/pieces/peca5.png");
    this.load.image("piece6", "assets/pieces/peca6.png");
    this.load.image("piece7", "assets/pieces/peca7.png");
    this.load.image("piece8", "assets/pieces/peca8.png");
    this.load.image("piece9", "assets/pieces/peca9.png");
    this.load.image("piece10", "assets/pieces/peca10.png");
    this.load.image("piece11", "assets/pieces/peca11.png");
    this.load.image("piece12", "assets/pieces/peca12.png");
    this.load.image("piece13", "assets/pieces/peca13.png");
    this.load.image("piece14", "assets/pieces/peca14.png");
    this.load.image("piece15", "assets/pieces/peca15.png");
    this.load.image("piece16", "assets/pieces/peca16.png");
    this.load.image("piece17", "assets/pieces/peca17.png");
    this.load.image("piece18", "assets/pieces/peca18.png");
    this.load.image("piece19", "assets/pieces/peca19.png");
    this.load.image("piece20", "assets/pieces/peca20.png");
    this.load.image("piece21", "assets/pieces/peca21.png");
    this.load.image("piece22", "assets/pieces/peca22.png");
    this.load.image("piece23", "assets/pieces/peca23.png");
    this.load.image("piece24", "assets/pieces/peca24.png");
    this.load.image("piece25", "assets/pieces/peca25.png");
    this.load.image("piece26", "assets/pieces/peca26.png");
    this.load.image("piece27", "assets/pieces/peca27.png");
    this.load.image("piece28", "assets/pieces/peca28.png");
    this.load.image("baralho", "assets/pieces/baralho.png");

  }


  // Start game and stop preloader
  create() {

    if (localStorage.getItem("a1") === null) {
      window.localStorage.setItem("a1", '0');
      window.localStorage.setItem("a2", '0');
      window.localStorage.setItem("b1", '0');
      window.localStorage.setItem("b2", '0');
    }

    let a1 = window.localStorage.getItem('a1');
    let a2 = window.localStorage.getItem("a2");
    let b1 = window.localStorage.getItem("b1");
    let b2 = window.localStorage.getItem("b2");

    this.progressBarIn.destroy();
    this.progressBarOut.destroy();

    this.scene.transition({
      target: 'startScene',
      duration: 1000,
      data: { a1: a1, a2: a2, b1: b1, b2: b2 },
      onComplete: () => { this.scene.start('startScene'); }
    });
  }

  // Code to execute every frame
  update() { }
}