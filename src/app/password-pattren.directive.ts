import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { MyServiceService } from './my-service.service';

@Directive({
  selector: '[appPasswordPattren]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordPattrenDirective, multi: true }]
})
export class PasswordPattrenDirective {

  constructor(private customValidator: MyServiceService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.patternValidator()(control);
  }
}