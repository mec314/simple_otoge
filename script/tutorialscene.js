var Global = require("./global");
var mainscene = require("./mainscene");
var EnemyManager = require("./enemy_manager");

let font = new g.DynamicFont({
    game: g.game,
    fontFamily: "sans-serif",
    size: 60,
    //fontWeight: "bold"
  });

let ue = Global.ue;
let shita = Global.shita;
let type1 = Global.type1;
let type2 = Global.type2;
let hit = Global.hit_sound;

let notes = [
    {timing:2.5, type:type2, params:{angle:0, y:ue, sound:hit}},
    {timing:5.0, type:type1, params:{angle:0, y:shita, sound:hit}},
];

function TutorialScene(){
    let time = 0;
    var scene = new g.Scene({
        game: g.game,
        assetPaths:["/audio/*", "/image/*"]
    });

    Global.scene = scene;

    let root = getBasics(scene);
    scene.append(root);

    let enemymanager = new EnemyManager(notes);

    scene.onUpdate.add(function(){
        time += 1/g.game.fps;
        if(time > 6.0){
            g.game.vars.gameState.score = 0;
            Global.score = 0;
            Global.combo = 0;
            Global.great = 0;
            Global.good = 0;
            Global.bad = 0;
            g.game.replaceScene(mainscene());
        }
        enemymanager.update();
    });

    return scene;

}


function getBasics(scene){
    let time = 0;
    let root = new g.E({scene: scene});
    let background = new g.FilledRect({
        scene: scene,
        width: g.game.width, 
        height: g.game.height,
        cssColor: Global.color //"black"
      });
 
     root.append(background);
 
     let line = new g.FilledRect({
         scene: scene,
         width: 5, 
         height: g.game.height,
         cssColor: "white",
         x: Global.line,
         y: g.game.height/2.0,
         anchorX: 0.5,
         anchorY: 0.5
      });
 
     root.append(line);
 
     let score_label = new g.Label({
         scene: scene,
         font: font,
         text: g.game.vars.gameState.score + "点",
         fontSize: 40,
         textColor: "white",
         x: 30,//g.game.width-200,
         y: 20
     });
     root.append(score_label);

     let combo_label = new g.Label({
        scene: scene,
        font: font,
        text: Global.combo+" Combo",
        fontSize: 40,
        textColor: "white",
        x: 30,//g.game.width-200,
        y: 70
    });
    root.append(combo_label);

    let max_combo = 0;
    let max_combo_label = new g.Label({
        scene: scene,
        font: font,
        text:  "Max: "+max_combo+" Combo",
        fontSize: 30,
        textColor: "white",
        x: 30,//g.game.width-200,
        y: g.game.height-170
    });
    root.append(max_combo_label);

    let great_label = new g.Label({
        scene: scene,
        font: font,
        text: "Great:" + Global.great,
        fontSize: 30,
        textColor: "white",
        x: 30,//g.game.width-200,
        y: g.game.height-130
    });
    root.append(great_label);

    let good_label = new g.Label({
        scene: scene,
        font: font,
        text: "Good:" + Global.good,
        fontSize: 30,
        textColor: "white",
        x: 30,
        y: g.game.height-90
    });
    root.append(good_label);

    let bad_label = new g.Label({
        scene: scene,
        font: font,
        text: "Bad:" + Global.bad,
        fontSize: 30,
        textColor: "white",
        x: 30,
        y: g.game.height-50
    });
    root.append(bad_label);

    let tutorial_label = new g.Label({
        scene: scene,
        font: font,
        text: "チュートリアル",
        fontSize: 40,
        textColor: "white",
        x: g.game.width/2.0-200,
        y: g.game.height/2.0,
        anchorX: 0.5,
        anchorY: 0.5,
        opacity: 0.5
    });
    root.append(tutorial_label);

    let tutorial_label2 = new g.Label({
        scene: scene,
        font: font,
        text: "線まできたらクリック",
        fontSize: 40,
        textColor: "white",
        x: Global.line-20,
        y: 40,
        anchorX: 1.0,
        anchorY: 0.5
    });
    root.append(tutorial_label2);

    let tutorial_label3 = new g.Label({
        scene: scene,
        font: font,
        text: "線まできたら右にフリック",
        fontSize: 40,
        textColor: Global.color,
        x: Global.line-20,
        y: g.game.height-40,
        anchorX: 1.0,
        anchorY: 1.0
    });
    root.append(tutorial_label3);

    scene.onUpdate.add(function(){   
        score_label.text=Math.floor(g.game.vars.gameState.score)+"点";
        score_label.invalidate();

        time += 1/g.game.fps; 
        if(time > 2.6){
            tutorial_label2.textColor = Global.color;
            tutorial_label2.invalidate();
            tutorial_label3.textColor = "white";
            tutorial_label3.invalidate();
        }

        combo_label.text = Global.combo+" Combo";
        combo_label.invalidate();

        great_label.text = "Great:" + Global.great;
        great_label.invalidate();

        good_label.text = "Good:" + Global.good;
        good_label.invalidate();

        bad_label.text = "Bad:" + Global.bad;
        bad_label.invalidate();
        if(Global.combo >  max_combo){
            max_combo = Global.combo;
            max_combo_label.text = "Max: "+max_combo+" Combo";
            max_combo_label.invalidate();
        }

    });

     return root;

}

function debugout(scene, moji){
    let score_label = new g.Label({
        scene: scene,
        font: font,
        text: moji + "",
        fontSize: 40,
        textColor: "white",
        x: 300,
        y: 300
    });
    scene.append(score_label);
}

module.exports = TutorialScene;