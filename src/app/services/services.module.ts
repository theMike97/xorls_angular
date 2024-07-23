import { NgModule } from "@angular/core";
import { DRAWING_SERVICE } from "./drawing/drawing.service";
import { DrawingServiceReal } from "./drawing/drawing.service.real";

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        {
            provide: DRAWING_SERVICE,
            useClass: DrawingServiceReal
        }
    ]
})
export class ServicesModule {}