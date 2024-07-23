export const DRAWING_SERVICE = 'DRAWING_SERVICE';
export interface DrawingService {
    // TODO: methods
    redraw(context: CanvasRenderingContext2D): void;
}