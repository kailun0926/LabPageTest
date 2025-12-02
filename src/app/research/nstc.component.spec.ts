import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NstcComponent } from './nstc.component';

describe('NstcComponent', () => {
  let component: NstcComponent;
  let fixture: ComponentFixture<NstcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NstcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NstcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
