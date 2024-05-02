import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MessagesModule } from 'primeng/messages';
import { KnobModule } from 'primeng/knob';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    MenubarModule,
    DividerModule,
    ImageModule,
    RatingModule,
    TagModule,
    ToggleButtonModule,
    CheckboxModule,
    TableModule,
    PanelMenuModule,
    MegaMenuModule,
    TieredMenuModule,
    MessagesModule,
    KnobModule,
    PanelModule,
    SkeletonModule,
    ScrollTopModule,
    DropdownModule,
    FieldsetModule,
    ProgressSpinnerModule,
    DialogModule,
    SelectButtonModule
  ],
  providers: [
  ]
})
export class MyPrimengModule { }
