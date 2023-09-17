import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { component: HomeComponent, path: '', },
  { component: BlogsComponent, path: 'blog/:id' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
