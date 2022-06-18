import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./contact/add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./chat/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./manage/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
