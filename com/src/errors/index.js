"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchError = exports.DupliciteError = exports.CredentialError = exports.InvalidInputError = exports.NotFoundError = exports.ContentError = void 0;
class ContentError extends Error {
    constructor(message) {
        super(message);
        this.name = "ContentError";
    }
}
exports.ContentError = ContentError;
class NotFoundError extends ContentError {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}
exports.NotFoundError = NotFoundError;
class InvalidInputError extends ContentError {
    constructor(message) {
        super(message);
        this.name = "InvalidInputError";
    }
}
exports.InvalidInputError = InvalidInputError;
class CredentialError extends ContentError {
    constructor(message) {
        super(message);
        this.name = "CredentialError";
    }
}
exports.CredentialError = CredentialError;
class DupliciteError extends Error {
    constructor(message) {
        super(message);
        this.name = "DupliciteError";
    }
}
exports.DupliciteError = DupliciteError;
class MatchError extends Error {
    constructor(message) {
        super(message);
        this.name = "MatchError";
    }
}
exports.MatchError = MatchError;
const errors = {
    ContentError,
    NotFoundError,
    InvalidInputError,
    CredentialError,
    DupliciteError,
    MatchError
};
exports.default = errors;
