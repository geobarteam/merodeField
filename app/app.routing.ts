import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }      from './app.component';
import { AreaSelectorComponent } from './areaselector/areaselector.component'

const appRoutes: Routes = [
    {
        path: '',
        component: AreaSelectorComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
