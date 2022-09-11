import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule)
  },
  {
    path: '',
    component: Tab4Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
