import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';
import { By } from '@angular/platform-browser';

describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzbuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have a start field', () => {
    expect(
      fixture.debugElement.query(By.css('input[name=start]')).nativeElement
    ).toBeDefined();
  })

  it ('should have an end field', () => {
    expect(
      fixture.debugElement.query(By.css('input[name=end]')).nativeElement
    ).toBeDefined();
  })

  it ('should have a submit button', () => {
    expect(
      fixture.debugElement.query(By.css('button[type=submit]')).nativeElement
    ).toBeDefined();
  })

});
