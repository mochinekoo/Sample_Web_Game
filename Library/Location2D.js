export class Location2D {
    x_ = 0.0;
    y_ = 0.0;
    constructor(x, y) {
        this.x_ = x;
        this.y_ = y;
    }
    distance(location) {
        return Math.sqrt((this.x_ - location.x_) * (this.x_ - location.x_) +
            (this.y_ - location.y_) * (this.y_ - location.y_));
    }
}
//# sourceMappingURL=Location2D.js.map