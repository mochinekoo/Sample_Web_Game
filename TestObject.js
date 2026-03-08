import { Location2D } from "./Location2D.js";
import { Vector2D } from "./Vector2D.js";
import { GameUtil } from "./GameUtil.js";
export class TestObject {
    render2D_;
    location_;
    vector_;
    constructor(render2D) {
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
    }
    draw() {
        this.render2D_.fillStyle = "red";
        this.render2D_.fillRect(this.location_.x_, this.location_.y_, 50, 50);
    }
    init() {
        this.location_ = new Location2D(10.0, 10.0);
        this.vector_ = new Vector2D(0.0, 0.0);
    }
}
//# sourceMappingURL=TestObject.js.map