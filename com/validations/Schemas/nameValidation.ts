import {z} from 'zod';

const nameValidation = z
  .string()
  .min(2, {message: 'Name must be at least 2 characters long'})
  .max(50, {message: 'Name must be at most 50 characters long'})
  .regex(/^[a-zA-Z\s]+$/, {message: 'Name can only contain letters and spaces'});

  export default nameValidation;
// This code defines a Zod schema for validating names. It checks that the name is at least 2 characters long, at most 50 characters long, and contains only letters and spaces. If any of these conditions are not met, it returns an appropriate error message.