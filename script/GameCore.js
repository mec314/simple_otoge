var Global = require("./global");

function GameCore(scene) {
    this.scene = scene;
    this.cntr = 0;
    this.entities = [];
}

GameCore.prototype.start = function() {
    this.enemyManager = new EnemyManager();
    this.entities.push(this.enemyManager);
}

GameCore.prototype.updateEntities = function() {
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
};