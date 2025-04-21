import {z} from 'zod';

const passwordValidation = z
  .string()
  .min(8, {message: 'Password must be at least 8 characters long'})
  .max(50, {message: 'Password must be at most 50 characters long'})
  .regex(/[a-z]/, {message: 'Password must contain at least one lowercase letter'})
  .regex(/[A-Z]/, {message: 'Password must contain at least one uppercase letter'})
  .regex(/[0-9]/, {message: 'Password must contain at least one number'})
  .regex(/[^a-zA-Z0-9]/, {message: 'Password must contain at least one special character'})
  .regex(/^(?!.*\s).+$/, {message: 'Password cannot contain spaces'})

export default passwordValidation; 
// This code defines a Zod schema for validating passwords. It checks that the password meets certain criteria, such as length, character types, and the absence of spaces.