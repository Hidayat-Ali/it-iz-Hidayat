import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { HomeComponent } from './components/home/home.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutUsComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    BlogsComponent,
    LatestBlogComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
