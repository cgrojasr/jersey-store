import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AdminGuard } from './admin.guard';

import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { LayoutComponent } from './layout/layout.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoCartComponent } from './demo-cart/demo-cart.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'product/:id',
        component: ProductComponent
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'demodetails/:id',
    component: DemoDetailsComponent
  },
  {
    path: 'demoform/new',
    component: DemoFormComponent
  },
  {
    path: 'demoform/edit/:id',
    component: DemoFormComponent
  },
  {
    path: 'democart',
    component: DemoCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
