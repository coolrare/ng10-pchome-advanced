import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator2';
import { Observable } from 'rxjs';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[wait][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: WaitDirective, multi: true }
  ]
})

export class WaitDirective implements AsyncValidator {
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise<ValidationErrors|null>((resolve) => {
      setTimeout(() => {
        resolve({ wait: false });
      }, 3000);
    });
  }
}
