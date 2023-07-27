import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private themeService: ThemeService) { }

  toggleMode() {
    this.themeService.toggleMode();
    console.log('i am called')
  }
  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }

}
