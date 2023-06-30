export class Point {
    public x: number = 0;
    public y: number = 0;

    public constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    public setPoint(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

}