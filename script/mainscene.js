var Global = require("./global");
var notes1 = require("./notes");
var EnemyManager = require("./enemy_manager");

let font = new g.DynamicFont({
    game: g.game,
    fontFamily: "sans-serif",
    size: 60,
    //fontWeight: "bold"
  });

let time = 60;

function MainScene(){
    var scene = new g.Scene({
        game: g.game,
        assetPaths:["/audio/*", "/image/*"]
    });

    Global.scene = scene;

    scene.onLoad.add(function(){
        let player = scene.asset.getAudioById("bgm2").play();
        let root = getBasics(scene);

        scene.setTimeout(function() {
            if(Global.isAtsumaru){
                scene.asset.getAudioById("kansei").play();
                window.RPGAtsumaru.scoreboards.setRecord(1, Math.floor(g.game.vars.gameState.score));
            }
        }, 74000);

        scene.setTimeout(function() {
            if(Global.isAtsumaru){
                window.RPGAtsumaru.scoreboards.display(1);
            }
        }, 75000);

        if(Global.isAtsumaru){
            let ranking = new g.Sprite({ //ランキングボタン
                scene: Global.scene,	src: scene.asset.getImageById("ranking"), parent:root,
                 x: g.game.width*0.94, y: g.game.height*0.6, scaleX: 1.25, scaleY: 1.25,
                anchorX: 0.5, anchorY: 0.5, touchable: true,
             });
             ranking.onPointDown.add(function() {// ランキング表示
                window.RPGAtsumaru.scoreboards.display(1);
             });
            let restart = new g.Sprite({ // リスタートボタン
                 scene: Global.scene,	src: scene.asset.getImageById("restart"), parent:root,
                x: g.game.width*0.94, y: g.game.height*0.8, scaleX: 1.25, scaleY: 1.25,
                    anchorX: 0.5, anchorY: 0.5, touchable: true,
                 });
            restart.onPointDown.add(function() {// リスタート操作
                player.stop()
                g.game.vars.gameState.score = 0;
                Global.score = 0;
                Global.combo = 0;
                Global.great = 0;
                Global.good = 0;
                Global.bad = 0;
                g.game.replaceScene(MainScene());
            });
        }

        scene.append(root);
    })

    let notes = notes1();

    let enemymanager = new EnemyManager(notes);

    scene.onUpdate.add(function(){
        enemymanager.update();
    });

    return scene;

}


function getBasics(scene){
    let root = new g.E({scene: scene});
    let background = new g.FilledRect({
        scene: scene,
        width: g.game.width, 
        height: g.game.height,
        cssColor: Global.color//"black"
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
 
     /*
     let time_label = new g.Label({
         scene: scene,
         font: font,
         text: "残り"+time+"秒",
         fontSize: 40,
         textColor: "white",
         x: 30,
         y: 40
     });
     root.append(time_label);
     */

     scene.onUpdate.add(function(){   
        score_label.text=Math.floor(g.game.vars.gameState.score)+"点";
        score_label.invalidate();

        /*
        time -= 1/g.game.fps; 
        time_label.text="残り"+Math.ceil(time)+"秒";
        time_label.invalidate();
        */

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


module.exports = MainScene;