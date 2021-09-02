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

  it ('should return the input when not fizz or buzz', () => {
    assertFizzBuzz(component, 1, 1);
    assertFizzBuzz(component, 2,2);
    assertFizzBuzz(component, 4,4);
  })

  it ('should return Fizz when given 3', () => {
    assertFizzBuzz(component, 3, "Fizz");
  })
  it ('should return Buzz when given 5', () => {
    assertFizzBuzz(component, 5, "Buzz");
  })
  it ('should return Fizz when given 6', () => {
    assertFizzBuzz(component, 6, "Fizz");
  })

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

function assertFizzBuzz(component: FizzbuzzComponent, input: number, expected: number | string) {
  expect(component.isFizzBuzz(input)).toEqual(expected);
}
