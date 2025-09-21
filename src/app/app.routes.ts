import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/sections/about-me/about-me.component';
import { ResumeComponent } from './components/sections/resume/resume.component';
import { WorksComponent } from './components/sections/works/works.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { ProductsComponent } from './components/sections/products/products.component';
import { StatisticsComponent } from './components/sections/statistics/statistics.component';

export const routes: Routes = [
    { path: 'about', component: AboutMeComponent},
    { path: 'resume', component: ResumeComponent },
    { path: 'works', component: WorksComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', redirectTo: '/about' }
];