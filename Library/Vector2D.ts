export class Vector2D {

    x_:number = 0.0
    y_:number = 0.0

    public constructor(x:number, y:number) {
        this.x_ = x;
        this.y_ = y;
    }

    add(x:number, y:number) {
        let temp = new Vector2D(this.x_, this.y_);
        temp.x_ = temp.x_ + x;
        temp.y_ = temp.y_ + y;
        return temp;
    }

    subtract(x:number, y:number) {
        let temp = new Vector2D(this.x_, this.y_);
        temp.x_ = temp.x_ - x;
        temp.y_ = temp.y_ - y;
        return temp;
    }

    dot(x:number, y:number) {
        let temp = new Vector2D(this.x_, this.y_);
        temp.x_ = temp.x_ * x;
        temp.y_ = temp.y_ * y;
        return temp;
    }

    cross(x:number, y:number) {
        let temp = new Vector2D(this.x_, this.y_);
        temp.x_ = temp.x_ * y;
        temp.y_ = temp.y_ * x;
        return temp;
    }

    length() {
        return Math.sqrt(this.x_ * this.x_ + this.y_ * this.y_);
    }

    normalize() {
        let length = this.length();
        let x:number = length == 0 ? 0 : this.x_ / length;
        let y:number = length == 0 ? 0 : this.y_ / length;
        return new Vector2D(x, y);
    }
}