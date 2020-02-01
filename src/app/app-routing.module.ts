import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerGuard } from './guards/controller.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'join', pathMatch: 'full'
  },
  {
    path: 'join', loadChildren: () => import('./join/join.module').then(m => m.JoinModule)
  },
  {
    path: 'controller',
    canActivate: [ControllerGuard],
    loadChildren: () => import('./controller/controller.module').then(m => m.ControllerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
