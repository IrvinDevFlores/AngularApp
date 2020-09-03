import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component'
import { UserComponent } from './components/user-component/user-component.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'users', component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
