import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {
  constructor() { }

  ngOnInit(): void {
    this.initAnimation();
  }

  ngOnDestroy(): void {
    // Clean up GSAP animations when component is destroyed
    gsap.globalTimeline.clear();
  }

  private initAnimation(): void {
    const animateWithRandomNumber = (myClass: string, from: number, to: number) => {
      gsap.fromTo(myClass,
        { y: from },
        {
          y: to,
          duration: Math.floor((Math.random() * 20) + 1),
          ease: 'none',
          onComplete: animateWithRandomNumber,
          onCompleteParams: [myClass, from, to]
        }
      );
    };

    // Animate elements moving down
    [".light4", ".light5", ".light6", ".light7", ".light8", ".light11",
      ".light12", ".light13", ".light14", ".light15", ".light16"].forEach(e => {
        animateWithRandomNumber(e, -1080, 1080);
      });

    // Animate elements moving up
    [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].forEach(e => {
      animateWithRandomNumber(e, 1080, -1080);
    });
  }
}
