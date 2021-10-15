import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export interface ISelectOption {
	value: any;
	viewValue: string
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public searchForm: FormGroup;
  public categoryOptions: ISelectOption[] = [{
    value: 1,
    viewValue: 'firtsValue',
  },
  {
    value: 2,
    viewValue: 'secondValue',
  },
  {
    value: 3,
    viewValue: 'thirdValue',
  }];
  constructor(private fb: FormBuilder) {
		this.searchForm = this.fb.group({
      searchKeyword: [''],
			category: ['']
		});

  }

  ngOnInit(): void {
  }



  onInputChange(){
    console.log('input change');
  }

}
