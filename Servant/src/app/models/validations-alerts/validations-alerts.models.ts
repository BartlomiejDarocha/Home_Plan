enum AlertsErrors {
  required = 'Pole jest wymagane.',
  pattern = 'Wypełnij pole poprawnie.',
  email = 'Niepoprawny email.'
}

export interface ValidationsErorr {
  error: AlertsErrors;
}