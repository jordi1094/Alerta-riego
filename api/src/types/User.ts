export interface UserRequestBody{
    name: string;
    email: string;
    username: string;
    password: string;
    passwordRepeat: string;
}

export interface User{
    id: Number;
    name: string;
    email:string;
    username:string;
    password:string
}