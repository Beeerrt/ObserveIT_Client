export class user{
    name: String;
    username: String;
    email: String;
    password: String;
    isAdmin: boolean;
    telegramid: String;
    

    constructor(name?: String, username?: String, email?: String,
    password?: String, isAdmin?: boolean, telegramid?:String){

        this.name = name  || "";
        this.username = username || "";
        this.email = email|| "";
        this.password = password || "";
        this.isAdmin = isAdmin;
        this.telegramid = telegramid || "";
        
    }
}   