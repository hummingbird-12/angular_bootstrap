import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { DragDropListComponent } from './drag-drop-list/drag-drop-list.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    DragDropListComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
