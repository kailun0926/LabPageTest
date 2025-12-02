import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  field: string;
}

@Component({
  selector: 'app-team',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  readonly teamMembers = signal<TeamMember[]>([
    { id: 1, name: '林郁庭', image: 'assets/images/LinYuTing.jpeg', field: "影像識別、深度學習、機器學習、網頁設計、資料庫管理" },
    { id: 2, name: '劉恩慈', image: 'assets/images/LiuEnTzu.jpeg', field: "機器學習、資料庫管理" },
    { id: 3, name: '周青松', image: 'assets/images/ChouChingSung.jpg', field: "影像識別、機器學習" },
    { id: 4, name: '林耘孜', image: 'assets/images/LinYunTzu.jpeg', field: "機器學習、智慧製造" },
    { id: 5, name: '劉少宇', image: 'assets/images/LiuShaoYu.jpg', field: "機器學習、智慧製造、AI Agent" },
    { id: 6, name: '蔡婉煜', image: 'assets/images/TsaiWanYu.jpeg',  field: "智慧製造、AI Agent" },
    { id: 7, name: '王才瑜', image: 'assets/images/WangTsaiYu.jpg', field: "機器學習、智慧製造、AI Agent" },
    { id: 8, name: '林家仟', image: 'assets/images/LinChiaChien.jpg', field: "影像識別、深度學習、機器學習、智慧製造、AI Agent、資料庫管理" },
    { id: 9, name: '王亮凱', image: 'assets/images/WangLiangKai.png', field: "影像識別、深度學習、機器學習、智慧製造、AI Agent、網頁設計、資料庫管理" },
    { id: 10, name: '陳楷綸', image: 'assets/images/ChenkaiLun.jpg', field: "影像識別、機器學習、智慧製造、AI Agent、網頁設計、資料庫管理" },
  ]);
}
