import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  expanded: boolean;
  constructor() {
    this.expanded = true;
  }

  ngOnInit(): void {
    this.handleResize();
  }

  handleResize(): void {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      this.expanded = e.matches;
    });
  }

  manualToggle(): void {
    this.expanded = !this.expanded;
  }
}
