// src/app/app.component.ts
import { Component, inject, TemplateRef, ChangeDetectionStrategy, signal } from '@angular/core'; 
import { CommonModule, NgOptimizedImage } from '@angular/common'; 
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbOffcanvasModule, NgbOffcanvas, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// [新增] 匯入 HomeComponent，以便我們在 (activate) 事件中檢查它
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    NgbOffcanvasModule,
    NgOptimizedImage,
    NgbCollapseModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  // [新增]
  // 根據 isHomePage signal 的值，動態添加/移除 class
  // 這符合您的 "Do NOT use @HostBinding" 規則
  host: {
    '[class.full-page-layout]': 'isHomePage()'
  }
})
export class AppComponent {
  title = 'ntust-innc-jfdang';
  private offcanvasService = inject(NgbOffcanvas); 

  // (您現有的 signal，保持不變)
  public isResearchCollapsed = signal(true); 
  
  // [新增] 
  // 建立一個新的 signal 來追蹤我們是否在首頁
  public isHomePage = signal(false);

  /**
   * 開啟側邊欄 (保持不變)
   */
  open(content: TemplateRef<any>): void { 
    this.offcanvasService.open(content, { 
      position: 'start',
      backdropClass: 'bg-dark opacity-50',
      panelClass: 'bg-light'
    });
  }

  /**
   * [新增]
   * 每次路由出口 (router-outlet) 載入新元件時觸發
   * @param component 被載入的元件實例 (型別為 object)
   */
  onOutletActivated(component: object): void {
    // 檢查被載入的元件實例是否為 HomeComponent
    // 並據此更新 signal
    this.isHomePage.set(component instanceof HomeComponent);
  }
}