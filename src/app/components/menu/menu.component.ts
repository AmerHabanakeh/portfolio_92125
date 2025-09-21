import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems = [
    { label: 'ABOUT', icon: 'icon far fa-user', path: 'about' },
    { label: 'RESUME', icon: 'icon far fa-list-alt', path: 'resume' },
    { label: 'WORKS', icon: 'icon fas fa-eye', path: 'works' },
    { label: 'STATS', icon: 'icon fas fa-chart-simple', path: 'statistics' },
    { label: 'CONTACT', icon: 'icon far fa-paper-plane', path: 'contact' },
    // { label: 'PRODUCTS', icon: 'icon fas fa-laptop-code', path: 'products' }
  ];

  activeIndex: number = 0;


  constructor(private menuService: MenuService, 
    private router: Router,
    public themeService: ThemeService
  ) {}

  selectMenuItem(index: number): void {
    this.menuService.setMenuItem(index);
  }

  ngOnInit(): void {
    this.menuService.selectedMenuItem.subscribe(index => {
      this.activeIndex = index;
    });

    const currentPath = this.router.url.split('/')[1] || 'about';
    this.menuService.syncWithRoute(currentPath);
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
