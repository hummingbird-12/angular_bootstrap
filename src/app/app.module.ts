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
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormComponent } from './form/form.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ModalComponent } from './modal/modal.component';
import { NavsComponent } from './navs/navs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastComponent } from './toast/toast.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    DragDropListComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    FormComponent,
    InputGroupComponent,
    JumbotronComponent,
    ListGroupComponent,
    MediaComponent,
    ModalComponent,
    NavsComponent,
    NavbarComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressComponent,
    ScrollspyComponent,
    SpinnerComponent,
    ToastComponent,
    TooltipComponent
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
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    FormComponent,
    InputGroupComponent,
    JumbotronComponent,
    ListGroupComponent,
    MediaComponent,
    ModalComponent,
    NavsComponent,
    NavbarComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressComponent,
    ScrollspyComponent,
    SpinnerComponent,
    ToastComponent,
    TooltipComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
