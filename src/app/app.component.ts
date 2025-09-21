import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding } from '@angular/core';
import { CanvasComponent } from "./shared/components/canvas/canvas.component";
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { MenuComponent } from "./components/menu/menu.component";
import { MainInfoComponent } from "./shared/components/main-info/main-info.component";
import { MenuService } from './services/menu.service';
import { LoadingService } from './services/loading.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { filter } from 'rxjs';
import { CursorComponent } from './shared/components/cursor/cursor.component';
// import AOS from 'aos';
import * as AOS from 'aos';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
          CanvasComponent,
          CommonModule, 
          MenuComponent, 
          MainInfoComponent, 
          RouterOutlet,
          LoaderComponent,
          CursorComponent
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  isLoading = true;

  constructor(
    private menuService: MenuService,
    private loadingService: LoadingService,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const path = event.urlAfterRedirects.split('/')[1] || 'about';
        this.menuService.syncWithRoute(path);
      });
  }
  
  ngAfterViewInit() {
    AOS.init({
      once: false, 
      disable: false 
    });
    AOS.refresh(); 
  }

  ngOnInit() {
    this.loadingService.isLoading$.subscribe((loading: any) => {
      this.isLoading = loading;
    });

    // loading completion
    setTimeout(() => {
      this.loadingService.hide();
    }, 2000);
  }

}
