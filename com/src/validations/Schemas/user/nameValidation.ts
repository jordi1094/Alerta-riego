import {z} from 'zod';

const nameValidation = z
  .string()
  .min(2, {message: 'Name must be at least 2 characters long'})
  .max(50, {message: 'Name must be at most 50 characters long'})
  .regex(/^[a-zA-Z\s]+$/, {message: 'Name can only contain letters and spaces'});

  export default nameValidation;