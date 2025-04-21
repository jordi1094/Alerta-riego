import {z} from 'zod';

const emailValidation = z
  .string()
  .email({message: 'Invalid email address'})
  .min(5, {message: 'Email must be at least 5 characters long'})
  .max(50, {message: 'Email must be at most 50 characters long'})
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {message: 'Invalid email format'})
  .regex(/^(?!.*\s).+$/, {message: 'Email cannot contain spaces'})

export default emailValidation;
// This code defines a Zod schema for validating email addresses.