import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  isFizzBuzz(input: number): number | string {
    if (input % 3 === 0) return "Fizz";
    if (input === 5) return "Buzz";
    return input;
  }

}
