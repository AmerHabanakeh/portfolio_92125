import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainHeadingComponent } from "../../../shared/components/main-heading/main-heading.component";

export interface Work {
  title: string;
  image: string;
  types:string[];
  images: string[];
  link?: string; 

}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    CommonModule,
    MainHeadingComponent
],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent {
  selectedWork: any = null;
  currentImageIndex: number = 0;
  dialogOpen: boolean = false;

  WORKS: Work[] = [
    {
      title: "E-Learning System",
      image: "assets/works-image/aalamy-main.png",
      types: ['Gallery', 'Link'],
      images: [
        "assets/works-image/aalamy-main.png",
        "assets/works-image/aalamy-dashboard1.png",
        "assets/works-image/aalamy-dashboard2.png",
        "assets/works-image/aalamy-dashboard3.png"
      ],
      link: "https://site.aalamy.org/"
    },
    {
      title: "Investment Platform",
      image: "assets/works-image/sama-logo.svg",
      types: ['Link'],
      images: [
        "assets/works-image/sama-logo.svg",
        "assets/works-image/sama-1.png",
        "assets/works-image/sama-2.png",
        "assets/works-image/sama-3.png",
        "assets/works-image/sama-4.png",
        "assets/works-image/sama-5.png",
        "assets/works-image/sama-6.png",
        "assets/works-image/sama-7.png",        
      ],
      link: "https://invest-hub.net/#/"

    },
    {
      title: "Medical Platform",
      image: "assets/works-image/lamset-shefaa.png",
      types: ["Gallery"],
      images: [
        "assets/works-image/lamset-shefaa.png",
      ],
      link: 'https//#'
    },
    {
      title: "ERP System",
      image: "assets/works-image/zahi-logo.png",
      types: ["Gallery"],
      images: [
        "assets/works-image/zahi-logo.png",
        "assets/works-image/zahi1.png",
        "assets/works-image/zahi2.png",
        "assets/works-image/zahi3.png",
        "assets/works-image/zahi4.png",
      ],
      link: 'https://zahi-co.website/'
    },
    {
      title: "Deaf and mute medication management platform",
      image: "assets/works-image/medicine-login.png",
      types: ["Gallery"],
      images: [
        "assets/works-image/medicine-login.png",
        "assets/works-image/medicine1.png",
        "assets/works-image/medicine2.png"
      ],
      link: 'https://glanceread.com/'
    },
    {
      title: "Islamic Sharia Students Follow-up Platform",
      image: "assets/works-image/manazel-logo.png",
      types: ["Gallery"],
      images: [
        "assets/works-image/manazel-logo.png",
        "assets/works-image/manazel-1.png",
        "assets/works-image/manazel-2.png",
        "assets/works-image/manazel-3.png",
        "assets/works-image/manazel-web-1.png",
        "assets/works-image/manazel-web-2.png",
        "assets/works-image/manazel-web-3.png",
        "assets/works-image/manazel-web-4.png",
        "assets/works-image/manazel-web-11.png",
      ],
      link: 'https://manazelalabrar.com/'
    }
  ];

  filteredWorks = this.WORKS;
  selectedFilter = 'All';

  filterWorks(types: string) {
    this.selectedFilter = types;
    this.filteredWorks = types === 'All'
      ? this.WORKS
      : this.WORKS.filter(work => work.types.includes(types));
  }

  openDialog(work: any) {
    // if (work.link) return;
    this.selectedWork = work;
    this.currentImageIndex = 0;
    this.dialogOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeDialog() {
    this.dialogOpen = false;
    setTimeout(() => {
      this.selectedWork = null;
      document.body.style.overflow = '';
    }, 300);
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedWork.images.length;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedWork.images.length) % this.selectedWork.images.length;
  }
}
