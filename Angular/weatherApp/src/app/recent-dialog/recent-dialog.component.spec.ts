import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDialogComponent } from './recent-dialog.component';

describe('RecentDialogComponent', () => {
  let component: RecentDialogComponent;
  let fixture: ComponentFixture<RecentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
