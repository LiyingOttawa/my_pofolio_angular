import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'resume', loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule) },
    { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule) },
    { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
