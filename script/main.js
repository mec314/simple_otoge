var Global = require("./global");
var tutorialscene = require("./tutorialscene");

g.game.vars.gameState = { score: 0 };

exports.main = void 0;
function main(param) {
    Global.isAtsumaru = param.isAtsumaru;
    let scene = tutorialscene();
    g.game.pushScene(scene);
}
exports.main = main;