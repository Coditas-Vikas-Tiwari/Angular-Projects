export interface IDetails{ 
    email:string,
    password:string
}

export interface ITable {
    name:string,
    position:string,
    office:string,
    salary:number
}

export interface ISignup {
    name:string,
    email:string,
    password:string,
    confirmPassword: string
    
}

export interface ILogin {
    email:string,
    password:string,
}

export interface IUserDetails{
    data: IResult
}
export interface IResult {

name:string,
role:string,
token:string,
tokenExpiry:string,
userId:string
}

export interface IResponse{

    list:[ITable]
}