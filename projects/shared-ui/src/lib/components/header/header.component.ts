import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'su-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  plus(a:number, b:number):number {
    return a + b;
  }

}
