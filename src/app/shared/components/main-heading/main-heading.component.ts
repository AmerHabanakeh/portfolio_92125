import { CommonModule } from '@angular/common';
import { Component, computed, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-main-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-heading.component.html',
  styleUrl: './main-heading.component.css'
})
export class MainHeadingComponent {
  header: InputSignal<string> = input.required();

  splitText = computed(() => {
    const text = this.header();
    return {
      first: text.charAt(0),
      rest: text.slice(1)
    };
  });
}
