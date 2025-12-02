// src/app/research/research.component.ts
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
// 1. 匯入 CommonModule (提供 @for) 和 NgOptimizedImage
import { CommonModule, NgOptimizedImage } from '@angular/common';

// 2. [符合規則] 定義 Interface
interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Ongoing' | 'Completed'; // 使用聯合型別
  image: string;
}

@Component({
  selector: 'app-research',
  imports: [CommonModule, NgOptimizedImage], // 3. 加入 imports
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // [符合規則]
})
export class ResearchComponent {

  // 4. [符合規則] 使用 signal 管理狀態
  readonly projects = signal<Project[]>([
    {
      id: 'p1',
      title: 'Woody visual 2.0',
      description: '本計畫為學術研究者打造一個互動式的基因探索入口網站。我們利用 Angular 建立流暢的使用者介面，並嵌入 Grafana 儀表板，提供即時的數據洞察與便捷的基因查詢功能，加速研究流程。',
      status: 'Ongoing',
      image: 'assets/images/LOGO_WV.png' // 請替換為專案圖片
    },
  ]);
}