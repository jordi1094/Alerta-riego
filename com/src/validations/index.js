"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nameValidation_1 = __importDefault(require("./Schemas/nameValidation"));
const passwordValidation_1 = __importDefault(require("./Schemas/passwordValidation"));
const emailValidation_1 = __importDefault(require("./Schemas/emailValidation"));
const validateSchemas = {
    nameValidation: nameValidation_1.default,
    passwordValidation: passwordValidation_1.default,
    emailValidation: emailValidation_1.default
};
exports.default = validateSchemas;
