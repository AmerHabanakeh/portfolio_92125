import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })), // Initial state
      transition(':enter', [
        animate('500ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class ProductsComponent {

}
