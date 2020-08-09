import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './product/button/button.component'


@NgModule({
    declarations: [
        ProductComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        FormsModule
    ],
    providers: [],
})
export class ViewsModule { }
