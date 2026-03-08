import { Location2D } from "./Location2D.js";
import { Vector2D } from "./Vector2D.js";
export declare class TestObject {
    render2D_: CanvasRenderingContext2D;
    location_: Location2D;
    vector_: Vector2D;
    constructor(render2D: CanvasRenderingContext2D);
    update(): void;
    draw(): void;
    init(): void;
}
//# sourceMappingURL=TestObject.d.ts.map