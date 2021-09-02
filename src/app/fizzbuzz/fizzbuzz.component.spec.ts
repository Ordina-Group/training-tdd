import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FizzbuzzComponent} from './fizzbuzz.component';
import {By} from '@angular/platform-browser';

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
    cssElementExists('input[name=start]');
  })

  it ('should have an end field', () => {
    cssElementExists('input[name=end]');
  })

  it ('should have a submit button', () => {
    cssElementExists('button[type=submit]');
  })

  function cssElementExists(selector: string) {
    expect(
      fixture.debugElement.query(By.css(selector)).nativeElement
    ).toBeDefined();
  }
});
