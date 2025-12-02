// src/app/professor/professor.component.ts
import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-professor',
  imports: [CommonModule, NgbCarouselModule, NgOptimizedImage],
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessorComponent {

}
