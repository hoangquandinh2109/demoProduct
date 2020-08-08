import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms'


@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        FormsModule
    ],
    providers: [],
})
export class ViewsModule { }
