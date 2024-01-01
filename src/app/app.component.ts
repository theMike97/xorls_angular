import { Component, inject, type OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'xorls';
    private readonly primengConfig = inject(PrimeNGConfig);

    // constructor(private readonly primengConfig: PrimeNGConfig) {

    // }

    ngOnInit(): void {
        this.primengConfig.zIndex = {
            modal: 1100, // Dialog, sidebar
            overlay: 1000, // Dropdown, overlaypanel
            menu: 1000, // Overlay menus
            tooltip: 1100 // Tooltip
        };
    }
}
