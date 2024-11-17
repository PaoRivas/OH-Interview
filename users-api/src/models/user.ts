export interface User {
    username: string;
    email: string;
    password: string;
}

export interface UniqueUser extends User {
    id: string;
}