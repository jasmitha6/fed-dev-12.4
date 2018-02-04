import { Injectable } from '@angular/core';

@Injectable()
// creating class dropdownservice for fetching gender detail 
export class DropDownService {

  private genderArray: any[] = [];
  constructor() { }

  getDropDown(): any[] {
    return this.genderArray = [{
      id: 1,
      value: 'Mr'
    },
    {
      id: 1,
      value: 'Mrs'
    }
    ]
  }

}
