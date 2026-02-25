import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainHeadingComponent } from "../../../shared/components/main-heading/main-heading.component";

export interface Statistic {
  icon: string;
  label: string;
  value: number;
}


@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [MainHeadingComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  statistics: Statistic[] = [
    { icon: 'fab fa-github', label: 'GitHub Stars', value: 1 },
    { icon: 'fas fa-smile', label: 'Happy Clients', value: 2 },
    { icon: 'fas fa-briefcase', label: 'Years of Experience', value: 3 },
    { icon: 'fas fa-code', label: 'Projects Number', value: 8 },
  ];
}
