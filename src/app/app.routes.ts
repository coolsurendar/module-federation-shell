import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3200/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.ContentsModule),
  },

];
