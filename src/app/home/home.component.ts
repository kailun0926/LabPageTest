// src/app/home/home.component.ts
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// [修正] 匯入 CommonModule 和 NgOptimizedImage
import { CommonModule, NgOptimizedImage } from '@angular/common';

// (您的 interface 'pictures' 保持不變)
interface pictures {
  id: number;
  path: string;
  context: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // [修正] 將 CommonModule 和 NgOptimizedImage 加入 imports
  imports: [CommonModule, NgbCarouselModule, NgOptimizedImage], 
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class HomeComponent {
  // 您的 labpictures signal (保持不變)
  readonly labpictures = signal<pictures[]>([
    { id: 1, path: 'assets/images/ajoy_1_2.1.jpg', context: '10/27 饗 A Joy 聚餐'},
    { id: 2, path: 'assets/images/ajoy_2_2.1.jpg', context: '10/27 饗 A Joy 聚餐'},
    { id: 3, path: 'assets/images/ajoy_3_2.1.jpg', context: '10/27 饗 A Joy 聚餐'},
  ]);
}