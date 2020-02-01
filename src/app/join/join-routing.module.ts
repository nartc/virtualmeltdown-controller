import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinContainerComponent } from './join-container.component';

const routes: Routes = [
  { path: '', component: JoinContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinRoutingModule {
}
