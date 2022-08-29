export enum AlertsErrors {
  required = 'Pole jest wymagane.',
  pattern = 'Wypełnij pole poprawnie.',
  minlength = 'Minimalna liczba znaków wynosi'
}

export interface CustomAlert {
  text: string;
  methodToCheckStatus: Function
  methodToDisplayAlert: Function;
  mainInputName: string;
  errorKeysOption?: string[];
  inputNamesOption?: string[];
}
