import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  isLoading: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    // Hide preloader when page is loaded
    window.addEventListener('load', () => {
      this.hidePreloader();
    });

    // Optional: Show preloader during route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        this.isLoading = true;
      });
  }

  hidePreloader() {
    // Add slight delay for smooth transition
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
