import {Location2D} from "../Library/Location2D.js";
import {Vector2D} from "../Library/Vector2D.js";
import {GameUtil} from "../Util/GameUtil.js";

export class Bullet {
    render2D_:CanvasRenderingContext2D;
    location_:Location2D;
    vector_:Vector2D;

    public constructor(render2D:CanvasRenderingContext2D, location:Location2D) {
        this.location_ = new Location2D(location.x_, location.y_);
        this.vector_ = new Vector2D(0, 3.0);
        this.render2D_ = render2D;
    }

    update() {
        this.location_.x_ -= this.vector_.x_;
        this.location_.y_ -= this.vector_.y_;
    }

    draw() {
        this.render2D_.fillStyle = "red";
        this.render2D_.beginPath();
        this.render2D_.arc(this.location_.x_, this.location_.y_, 50, 0, Math.PI * 2);
        this.render2D_.fill();
    }

    init() {
        this.location_ = new Location2D(0.0, 0.0);
        this.vector_ = new Vector2D(0.0, 0.0);
    }
}