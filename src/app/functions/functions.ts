//Tested
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

export function formData(data: any) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, handerAarry(value));
    if (Array.isArray(value)) {
      value.forEach((element, i) => {
        for (const [keyone, valuetwo] of Object.entries(element)) {
          if (keyone == 'images') {
            formData.append(`${keyone}${i}`, handerAarry(valuetwo));
          }
        }
      });
    }
  }
  return formData;
}

function handerAarry(data: any) {
  if (Array.isArray(data)) {
    return JSON.stringify(data);
  } else {
    return data;
  }
}

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (control: AbstractControl): ValidationErrors | null => {
    const input = control.get(controlName);
    const matchingInput = control.get(matchingControlName);

    if (input === null || matchingInput === null) {
      return null;
    }

    if (matchingInput?.errors && !matchingInput.errors['confirmedValidator']) {
      return null;
    }

    if (input.value !== matchingInput.value) {
      matchingInput.setErrors({ confirmedValidator: true });
      return { confirmedValidator: true };
    } else {
      matchingInput.setErrors(null);
      return null;
    }
  };
}

export function whitespaceValidator(control: FormControl) {
  const isSpace = (control.value || '').match(/\s/g);
  return isSpace ? { whitespace: true } : null;
}
