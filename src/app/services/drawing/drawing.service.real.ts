import { Injectable } from "@angular/core";
import { DrawingService } from "./drawing.service";

@Injectable()
export class DrawingServiceReal implements DrawingService{
    constructor() {}

    public redraw(context: CanvasRenderingContext2D): void {
        console.log('placeholder for redraw method');
    }
}