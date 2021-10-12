import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-ui',
  template: `
    <p>
      shared-ui works!
    </p>
  `,
  styles: [
  ]
})
export class SharedUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
