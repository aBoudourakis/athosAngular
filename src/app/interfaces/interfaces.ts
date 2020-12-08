interface FieldValidation {
  name: string;
  message: string;
  value: string | number;
}
interface RegistrationField {
  type: 'text' | 'email' | 'phone' | 'password';
  name: string;
  label: string;
  required: boolean;
  validations?: FieldValidation[];
}
interface RegistrationRequest {
  [fieldName: string]: string;
}

export const registrationFormFieldsResponseExample: RegistrationField[] = [
  {
    type: 'text',
    name: 'first_name',
    label: 'First Name',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-zA-Z0-9]*$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 64 characters.',
        value: 63,
      },
    ],
  },
  {
    type: 'text',
    name: 'middle_name',
    label: 'Middle Name',
    required: false,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-zA-Z0-9]*$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 64 characters.',
        value: 63,
      },
    ],
  },
  {
    type: 'text',
    name: 'last_name',
    label: 'Last Name',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-zA-Z0-9]*$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 64 characters.',
        value: 63,
      },
    ],
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,}$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 47 characters.',
        value: 46,
      },
    ],
  },
  {
    type: 'phone',
    name: 'phone_number',
    label: 'Mobile number',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only numbers are allowed.',
        value: '^[0-9]+$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 47 characters.',
        value: 10,
      },
      {
        name: 'minlength',
        message: 'Must not be less than 4 characters.',
        value: 4,
      },
    ],
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    required: true,
    validations: [
      {
        name: 'maxlength',
        message: 'Must be less than 15 characters.',
        value: 15,
      },
      {
        name: 'minlength',
        message: 'Must not be less than 8 characters.',
        value: 8,
      },
      {
        name: 'regex',
        message: '1 or more numbers.',
        value: '^.*[0-9].*$',
      },
      {
        name: 'regex',
        message: '1 or more lower case letters.',
        value: '^.*[a-z].*$',
      },
      {
        name: 'regex',
        message: '1 or more upper case letters.',
        value: '^.*[A-Z].*$',
      },
    ],
  },
];


export const registrationRequestExample: RegistrationRequest = {
  first_name: 'John',
  middle_name: '',
  last_name: 'Doe',
  email: 'john@test.com',
  phone_number: '12345678',
  password: 'SecretPassword',
};
