class ContentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContentError";
  }
}
class NotFoundError extends ContentError {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
class InvalidInputError extends ContentError {  
  constructor(message: string) {
    super(message);
    this.name = "InvalidInputError";
  }
}
class CredentialError extends ContentError {
  constructor(message: string) {
    super(message);
    this.name = "CredentialError";
  }
}
class DupliciteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DupliciteError";
  }
}

  export {
  ContentError,
  NotFoundError,
  InvalidInputError,
  CredentialError,
  DupliciteError
};

const errors = {
  ContentError,
  NotFoundError,
  InvalidInputError,
  CredentialError,
  DupliciteError
}

export default errors;
