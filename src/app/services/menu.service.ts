import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private router: Router) { }

  private selectedMenuItemSubject = new BehaviorSubject<number>(0);
  selectedMenuItem = this.selectedMenuItemSubject.asObservable();

  setMenuItem(index: number): void {
    this.selectedMenuItemSubject.next(index);
  }

  syncWithRoute(path: string): void {
    const menuItems = ['about', 'resume', 'works', 'statistics', 'contact', 'products'];
    const index = menuItems.indexOf(path);
    if (index !== -1) {
      this.selectedMenuItemSubject.next(index);
    }
  }

}
