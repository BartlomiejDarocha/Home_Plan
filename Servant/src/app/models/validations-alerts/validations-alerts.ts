export enum AlertsErrors {
  required = 'Pole jest wymagane.',
  pattern = 'Wypełnij pole poprawnie.',
  minlength = 'Minimalna liczba znaków wynosi'
}

export class PasswordRepeaterErrors {
  private errors: CustomAlertInteface[] = [
    { alertText: 'Podane hasła nie są identyczne', inputName: 'passwordRepeat'},
    { alertText: 'Hasło różni się od powtórki', inputName: 'password'}
  ]
  public get getErrors(): CustomAlertInteface[] {
    return this.errors;
  };
}

export interface CustomAlertInteface {
  alertText: string;
  inputName: string;
}
