export class Location2D {

    x_:number = 0.0;
    y_:number = 0.0;

    public constructor(x:number, y:number) {
      this.x_ = x;
      this.y_ = y;
    }

    distance(location:Location2D) {
        return Math.sqrt((this.x_ - location.x_) * (this.x_ - location.x_) +
            (this.y_ - location.y_) * (this.y_ - location.y_));
    }
}