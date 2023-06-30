import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-project-workspace',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit {
  public value: string;

  public constructor() {

  }

  public ngOnInit(): void {
    this.value = "Project Name Here";
  }

}
