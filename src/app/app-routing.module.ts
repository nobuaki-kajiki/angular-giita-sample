import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

const routes: Routes =[
  { path: 'products', component:ProductListComponent },
  { path: 'products/:id', component:ProductDetailComponent },
  { path: 'products/:id/edit', component:ProductEditComponent },
  { path: '', redirectTo: '/products', pathMatch:'prefix' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }