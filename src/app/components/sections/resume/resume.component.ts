import { Component } from '@angular/core';
import { MainHeadingComponent } from "../../../shared/components/main-heading/main-heading.component";
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

export type KnowledgeSubItem =
  | string
  | { category: string; items: string[] };

export interface KnowledgeItem {
  title: string;
  isExpanded?: boolean;
  subItems: KnowledgeSubItem[];
}


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    MainHeadingComponent,
    CommonModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('expanded <=> collapsed', animate('300ms ease-out'))
    ])
  ]
})
export class ResumeComponent {
  experiences = [
    { period: '2023 - 2025', 
      title: 'Angular Developer', 
      company: 'JoyBox.', 
      descriptionItems: 
      [
        `Developed 5+ scalable Angular applications with RxJS, NgRx, and standalone components.`,
        `Implemented clean architecture principles with a focus on smart and dumb components`,
        `Integrated advanced Angular features such as lazy loading for optimized performance and reduced initial load time.`,
        `Built a real-time dashboard with Firebase authentication.`
      ]
    },

    { period: '2022 - Present', 
      title: 'ReactJs', 
      company: 'FreeLance.', 
      descriptionItems: [
        `Developed and maintained responsive web applications using React.js, ES6+, and modern frontend libraries.`,
        `Deal With MUI Materials & SyncFusion Library`,
        `Built reusable UI components with React Hooks, Context API, and Redux for state management.`,
        `Optimized frontend performance by implementing code splitting, lazy loading, and memoization techniques.`  
      ] 
    }
  ];

  educations = [
    { period: '2020 - Present',
      institution: 'Arab International University', 
      location: 'Syria',
      details: 'Bachelors Degree (Expected 2025)'
    },

    { period: '2021 - 2022', 
      institution: 'Programming Course', 
      location: 'Syria', 
      details: 'Coursework - Git, HTML , CSS , Javascript , React Javascript , Angular Javascript' 
    },

    { period: '2019-2020', 
      institution: 'Computer Technologies', 
      location: 'Syria', 
      details: 'Higher School Certificate'
    }
  ];

  skillData = {
    coding: [
      { name: 'HTML', percentage: 95 },
      { name: 'CSS', percentage: 95 },
      { name: 'Angular', percentage: 85 },
      { name: 'PHP / MYSQL', percentage: 30 },
    ],

    KNOWLEDGE_DATA: [
      {
        title: '1. Core Frontend Skills',
        isExpanded: false,
        subItems: [
          {
            category: 'HTML5 & CSS3',
            items: [
              'Semantic HTML, Accessibility (a11y)',
              'Flexbox, Grid',
              'CSS Animations'
            ]
          },
          {
            category: 'JavaScript (ES6+)',
            items: [
              'DOM Manipulation, Async/Await, Promises',
              'Closures, Prototypes',
              'Functional & OOP concepts'
            ]
          },
          {
            category: 'TypeScript',
            items: [
              'Strong typing',
              'Interfaces',
            ]
          },
          {
            category: 'Angular Framework',
            items: [
              'Components, Directives, Services',
              'Dependency Injection',
              'RxJS (Observables, Subjects, Operators)',
              'State Management (NgRx, Angular Signals)',
              'Angular CLI, Modules, Lazy Loading'
            ]
          },
        ]
      },
      {
        title: '2. Additional Frontend Tech',
        subItems: [
          {
            category: 'Frontend Tools',
            items: [
              'Webpack, Vite',
              'npm/yarn/pnpm',
              'Prettier, ESLint'
            ]
          },
          'CSS Preprocessors: SCSS/SASS, LESS',
          'Responsive Design: Media Queries, Mobile-First Approach',
          'UI/UX Basics: Figma/Sketch'
        ]
      },
      {
        title: '3. Testing & Debugging',
        subItems: [
          {
            category: 'Unit Testing',
            items: ['Jasmine, Karma, Jest']
          },
        ]
      },
      {
        title: '4. Version Control & Collaboration',
        subItems: [
          'Git & GitHub/GitLab: Branching strategies',
          'Agile/Scrum: Jira, Trello'
        ]
      },
      {
        title: '6. Soft Skills',
        subItems: [
          'Problem-Solving, Clean Code Practices',
          'Team Collaboration, Communication',
          'Adaptability to New Tech'
        ]
      }
    ] as KnowledgeItem[],

    languages: [{ name: 'Arabic', proficiency: 9 }, { name: 'English', proficiency: 5 }],
    softwareSkills: [
      { name: 'HTML', percentage: 95 },
      { name: 'CSS', percentage: 95 },
      { name: 'Javascript', percentage: 95 },
      { name: 'Typescript', percentage: 90 },
      { name: 'Angular', percentage: 75 },
      { name: 'React', percentage: 55 },
      { name: 'Angular Material', percentage: 85 },
      { name: 'Tailwind', percentage: 95 },
      { name: 'Bootstrap', percentage: 70 },
      { name: 'Git', percentage: 60 },
      { name: 'Firebase', percentage: 40 },
  ]
  }

  toggleExpand(item: KnowledgeItem): void {
    item.isExpanded = !item.isExpanded;
  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }

}
