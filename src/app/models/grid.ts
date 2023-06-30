import { GridStyle } from "./grid-style";
import { Point } from "./point";

export class Grid {

    private scale: number;
    private spacing: number;
    private zoom: number;
    private style: GridStyle;
    private dotSize: number;
    private isVisible: boolean;
    private origin: Point;

    public constructor() {
        this.scale = 1;
        this.spacing = 15;
        this. dotSize = 3;
        this.style = GridStyle.LINES;
        this.isVisible = true;
        this.origin = new Point(0, 0);
    }

    public setSpacing(spacing: number): void {
        this.spacing = spacing;
    }

    // more getters/setters

    public drawGrid(): void {

    }
}