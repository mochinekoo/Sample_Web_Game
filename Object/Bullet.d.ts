import { Location2D } from "../Library/Location2D.js";
import { Vector2D } from "../Library/Vector2D.js";
export declare class Bullet {
    render2D_: CanvasRenderingContext2D;
    location_: Location2D;
    vector_: Vector2D;
    constructor(render2D: CanvasRenderingContext2D, location: Location2D);
    update(): void;
    draw(): void;
    init(): void;
}
//# sourceMappingURL=Bullet.d.ts.map