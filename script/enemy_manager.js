const Enemy = require("./enemy");
const Enemy2 = require("./enemy2");
var Global = require("./global");

function EnemyManager(notes) {
    this.time = 0;
    this.entities = [];
    this.notes = notes;
}

EnemyManager.prototype.update = function() {
    if(this.notes.length >=1){
        //let timing = Math.floor(this.notes[0].timing);
        let timing = this.notes[0].timing-Global.shift;
        let time = timing - Global.line/Global.vx;
        
        if(Math.floor(time*g.game.fps) == this.time){
            let note = this.notes.shift();
            let enemy;
            if(note.type == Global.type1){
                enemy = new Enemy(note.params);
            }else if(note.type == Global.type2){
                enemy = new Enemy2(note.params);
            }
            this.entities.push(enemy);
            Global.scene.append(enemy.root);
        }
    }

    var len = this.entities.length;
    for (var i = 0; i < len; i++) {
        var e = this.entities[i]
        if (! e) {
            continue;
        }
        else {
            e.update();
        }
    }
    this.time++;
};


module.exports = EnemyManager;