import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator2';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[twid][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TwidDirective, multi: true }
  ]
})

export class TwidDirective implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    if (isNationalIdentificationNumberValid(c.value)) {
      return null;
    }

    return {
      twid: true
    };
  }
}
