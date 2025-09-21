import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent {
  x = 0;
  y = 0;
  isHovering = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;

    // Check if the element under cursor has pointer cursor
    const target = event.target as HTMLElement;
    const computedStyle = window.getComputedStyle(target);
    this.isHovering = computedStyle.cursor === 'pointer';
  }
}