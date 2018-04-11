export class user{
    name: String;
    username: String;
    email: String;
    password: String;
    isAdmin: boolean;
    
/**
 * Creates an instance of user.
 * @param {String} [name] 
 * @param {String} [username] 
 * @param {String} [email] 
 * @param {String} [password] 
 * @param {boolean} [isAdmin] 
 * @memberof user
 */
constructor(name?: String, username?: String, email?: String,
    password?: String, isAdmin?: boolean){

        this.name = name  || "";
        this.username = username || "";
        this.email = email|| "";
        this.password = password || "";
        this.isAdmin = isAdmin;
        
    }
}   