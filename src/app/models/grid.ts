import { GridStyle } from './grid-style';
import { Point } from './point';

/* eslint-disable */

export class Grid {
    private readonly scale: number;
    private spacing: number;
    private readonly zoom: number;
    private readonly style: GridStyle;
    private readonly dotSize: number;
    private readonly isVisible: boolean;
    private readonly origin: Point;

    public constructor() {
        this.scale = 1;
        this.spacing = 15;
        this.zoom = 1;
        this.dotSize = 3;
        this.style = GridStyle.LINES;
        this.isVisible = true;
        this.origin = new Point(0, 0);
    }

    public setSpacing(spacing: number): void {
        this.spacing = spacing;
    }

    // More getters/setters

    public drawGrid(): void {

    }
}
/* eslint-enable */
