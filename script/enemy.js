var Global = require("./global");

function Enemy(params){
    this.angle = params.angle; // 0: migi, 90, ue, 180, hidari, 270, shita
    this.pos = {x: 0, y: params.y};
    this.velocity = {x:Global.vx, y:0};
    this.sound = params.sound;
    this.size_v = 1.0;
    this.size = 1.0;
    this.break = false;
    this.score = 0.0;
    this.ispassed = true;
    
    this.root = new g.E({scene: Global.scene, x:0.0, y:0.0});

    this.spr = new g.FilledRect({
        scene: Global.scene,
        width: 128, 
        height: 128,
        cssColor: "white",
        anchorX:0.5, anchorY:0.5,
        touchable: true,
        x: this.pos.x, y:0.0
    });
    let sub_spr = new g.FilledRect({
        scene: Global.scene,
        width: 32, 
        height: 32,
        cssColor: Global.color,
        anchorX:0.5, anchorY:0.5,
        x: this.pos.x, y:0.0
    })
    let sub_spr2;
    if(params.angle==0){
        sub_spr2 = new g.FilledRect({
            scene: Global.scene,
            width:  64, 
            height: 12,
            cssColor: Global.color,
            anchorX:0.0, anchorY:0.5,
            x: this.pos.x, y:0.0
        })
    }else if(params.angle==90){
        sub_spr2 = new g.FilledRect({
            scene: Global.scene,
            width:  12, 
            height: 64,
            cssColor: Global.color,
            anchorX:0.5, anchorY:1.0,
            x: this.pos.x, y:0.0
        })
    }else if(params.angle==180){
        sub_spr2 = new g.FilledRect({
            scene: Global.scene,
            width:  64, 
            height: 12,
            cssColor: Global.color,
            anchorX:1.0, anchorY:0.5,
            x: this.pos.x, y:0.0
        })
    }else if(params.angle==270){
        sub_spr2 = new g.FilledRect({
            scene: Global.scene,
            width:  12, 
            height: 64,
            cssColor: Global.color,
            anchorX:0.5, anchorY:0.0,
            x: this.pos.x, y:0.0
        })
    }

    this.root.append(this.spr);
    this.root.append(sub_spr);
    this.root.append(sub_spr2);
    this.setup();
}

Enemy.prototype.setup = function(){
    let angle = this.angle;
    let _this = this;
    
    this.spr.onPointMove.add(function(ev) {
        let correct = {x:Math.cos(Math.PI*angle/180.0), y:Math.sin(Math.PI*angle/180.0)};
        
        let vec = {x:ev.startDelta.x, y:-ev.startDelta.y};
        let velo = {x:ev.prevDelta.x, y:-ev.prevDelta.y};

        let dot_vec = vec.x * correct.x + vec.y * correct.y;
        let dot_velo = velo.x * correct.x + velo.y * correct.y;

        if(dot_vec > 64){
            _this.score = Math.min(dot_velo*4, 50);
            _this.slashed();
        }
    });
}

Enemy.prototype.update = function() {
    let dt = 1.0/g.game.fps;
    this.pos.x += this.velocity.x * dt;
    this.pos.y += this.velocity.y * dt;

    this.root.x = this.pos.x;
    this.root.y = this.pos.y;
    this.root.modified();

    /*
    if(this.break){
        let factor = Math.max(this.pos.x-Global.line, Global.line-this.pos.x);
        factor = Math.max(2 - factor/50.0, 0.0);
        if(factor < 0.01){
            Global.combo=0;
        }
        g.game.vars.gameState.score += this.score*factor*(1.0+0.001*Global.combo);
        this.root.destroy();
        this.break = false;
        this.ispassed = false;
    }
    */
    if(this.ispassed){
        if(this.pos.x > Global.line + 40){
            Global.bad++;
            Global.combo = 0;
            this.ispassed = false;
        }
    }
}

Enemy.prototype.slashed = function(){
    this.break = true;
    Global.scene.asset.getAudioById(this.sound).play();

    let factor = Math.max(this.pos.x-Global.line, Global.line-this.pos.x);
    factor = Math.max(2 - factor/50.0, 0.0);
    let score = this.score*factor;
    
    if(score > 90){
        Global.combo++;
        Global.great++;
    }else if(score > 60){
        Global.combo++;
        Global.good++;
    }else{
        Global.bad++;
        Global.combo = 0;
    }

    score = score*(1.0+0.005*Global.combo);
    g.game.vars.gameState.score += score;
    g.game.vars.gameState.score = Math.floor(g.game.vars.gameState.score);

    this.root.destroy();
    this.break = false;
    this.ispassed = false;
}

Enemy.prototype.destroy = function(){
    this.spr.destroy()
}

module.exports = Enemy;