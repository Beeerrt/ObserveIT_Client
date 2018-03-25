export class user{
    name: String;
    username: String;
    email: String;
    password: String;
    isAdmin: boolean;

    constructor(name?: String, username?: String, email?: String,
    password?: String, isAdmin?: boolean){

        this.name = name  || "";
        this.username = username || "";
        this.email = email|| "";
        this.password = password || "";
        this.isAdmin = isAdmin;
        
    }
}   