import { Component, Input } from '@angular/core';
import { Macro } from 'src/app/models/Macro';
import { ItemGroup } from '../../models/ItemGroup';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent {
  @Input() enabled: boolean = true;
  @Input() rightCheckBox: boolean = false;
  @Input() leftCheckBox: boolean = false;
  @Input() group: ItemGroup = null;
  @Input() macro: Macro = null;

  constructor() {}
}
