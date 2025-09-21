import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainHeadingComponent } from "../../../shared/components/main-heading/main-heading.component";
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element';



@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MainHeadingComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })

export class AboutMeComponent {
  personalInfo = {
    name: 'Amer Habanakeh',
    description: `Front-end developer from Damascus, Syria. I have rich experience in Angular & React 
                  Proven expertise in developing single-page applications (SPAs), optimizing
                  performance. Strong understanding of RESTful APIs, UI/UX principles, and Agile methodologies. 
    `,
    details: [
      { label: 'AGE', value: '23' },
      { label: 'RESIDENCE', value: 'SYR' },
      { label: 'FREELANCE', value: 'Available' },
      { label: 'ADDRESS', value: 'Damascus, Syria' }
    ]
  };

  services = [
    {
      icon: 'fa-brands fa-html5 fa-xl',
      title: 'Frontend Development',
      descriptionPoints: [
        'Build responsive websites with Angular & React.',
        'Optimize performance (Lighthouse).',
        'Website Maintenance & Updates',
        'Code Reviews & Best Practices',
      ]
    },
    {
      icon: 'fa-brands fa-node-js fa-xl',
      title: 'Backend Integration',
      descriptionPoints: [
        'Connect frontend to RESTful APIs or GraphQL.',
        'Handle authentication (JWT, OAuth).',
        'Work with databases',
        'Deploy full-stack apps'
      ]
    },
    {
      icon: 'fa-solid fa-pen-ruler fa-xl',
      title: 'UI/UX Design',
      descriptionPoints: [
        'Convert Figma/XD designs to pixel-perfect code.',
        'Enhance accessibility (WCAG compliance).',
        'Add micro-interactions & animations.',
        'Conduct usability testing.'
      ]
    }
  ];

  clients = [
    { logo: 'assets/images/mac.svg'},
    { logo: 'assets/images/mac.svg'},
    { logo: 'assets/images/mac.svg'},
    { logo: 'assets/images/mac.svg'}
  ];

  testimonials = [
    // {
    //   quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   image: 'assets/images/me.svg',
    //   name: 'Test User',
    //   position: 'CEO Company'
    // },
    {
      quote: "Amer did an amazing job on our project. His attention to detail and technical skills are exceptional.",
      image: 'assets/images/me.svg',
      name: 'Yamen Hatahet',
      position: 'Project Owner'
    }
  ];

  
}