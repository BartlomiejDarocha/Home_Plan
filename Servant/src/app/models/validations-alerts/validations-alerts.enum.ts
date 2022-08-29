export enum AlertsErrors {
  required = 'Pole jest wymagane.',
  pattern = 'Wypełnij pole poprawnie.',
  minlength = 'Minimalna liczba znaków wynosi'
}

export interface CustomAlert {
  text: string;
  
}
