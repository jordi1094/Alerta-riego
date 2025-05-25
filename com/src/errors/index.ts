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
class MatchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MatchError";
  }
}

  export {
  ContentError,
  NotFoundError,
  InvalidInputError,
  CredentialError,
  DupliciteError,
  MatchError
};

const errors = {
  ContentError,
  NotFoundError,
  InvalidInputError,
  CredentialError,
  DupliciteError,
  MatchError
}

export default errors;
