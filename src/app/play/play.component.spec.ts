import { ComponentFixture, TestBed } from '@angular/core/testing';
import { playComponent } from './play.component';

describe('playComponent', () => {
  let component: playComponent;
  let fixture: ComponentFixture<playComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [playComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(playComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
