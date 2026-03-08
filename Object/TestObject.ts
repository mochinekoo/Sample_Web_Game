import {Location2D} from "../Library/Location2D.js"
import {Vector2D} from "../Library/Vector2D.js";
import {GameUtil} from "../Util/GameUtil.js";
import {Bullet} from "../Object/Bullet.js"
import {ObjectManager} from "../main.js"

export class TestObject {
    render2D_:CanvasRenderingContext2D;
    location_:Location2D;
    vector_:Vector2D;

    public constructor(render2D:CanvasRenderingContext2D) {
        this.location_ = new Location2D(10.0, 10.0);
        this.vector_ = new Vector2D(3.0, 3.0);
        this.render2D_ = render2D;
    }

    update() {
        //x += 2;
        if (GameUtil.keys["a"]) {
            this.location_.x_ -= this.vector_.x_;
        }
        if (GameUtil.keys["d"]) {
            this.location_.x_ += this.vector_.x_;
        }
        if (GameUtil.keys["w"]) {
            this.location_.y_ -= this.vector_.y_;
        }
        if (GameUtil.keys["s"]) {
            this.location_.y_ += this.vector_.y_;
        }

        //弾を発射
        if (GameUtil.keys["p"]) {
            let bullet = new Bullet(this.render2D_, this.location_);
            ObjectManager.bulletList.push(bullet);
        }
    }

    draw() {
        this.render2D_.fillStyle = "red";
        this.render2D_.fillRect(this.location_.x_,this.location_.y_,50,50);
    }

    init() {
        this.location_ = new Location2D(10.0, 10.0);
        this.vector_ = new Vector2D(0.0, 0.0);
    }
}