import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPauseComponent } from './dialog-pause.component';

describe('DialogPauseComponent', () => {
  let component: DialogPauseComponent;
  let fixture: ComponentFixture<DialogPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
