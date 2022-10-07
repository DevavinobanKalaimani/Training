import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIdComponent } from './team-id.component';

describe('TeamIdComponent', () => {
  let component: TeamIdComponent;
  let fixture: ComponentFixture<TeamIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
