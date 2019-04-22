import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AlertComponent } from '../alert/alert.component';
import { BadgeComponent } from '../badge/badge.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.css']
})
export class DragDropListComponent implements OnInit {
  widgetTypes = [
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.widgetTypes, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
  }
}
