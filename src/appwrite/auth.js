import { Client , Account , ID } from 'appwrite';
import  confenv  from '../envconf/confenv'
 

export class AuthService{
 client = new Client();
 account;

 constructor(){
    this.client
            .setEndpoint(confenv.appwriteUrl)
            .setProject(confenv.appwriteProjectId);

    this.account = new Account(this.client);
   

 }

 //User Account CRUD

 async createAccount ({email , password , name}){

    try {
        
        console.log(confenv.appwriteUrl);
        const userAccount = await this.account.create(ID.unique() , email , password , name);
        if(userAccount){
            return this.login({email , password})
        } else {
            return userAccount;
        }
    } catch (error) {
         
           console.error(error)
             
    }
 }

 async login({email , password}){
    try {
        return await this.account.createEmailSession(email , password)
    } catch (error) {
        console.log("UserAccount Login :: ERROR " ,error);
    }
 }

 async getCurrentUser(){
    try {
        const currentUser = await this.account.get()
        if(currentUser){
            return currentUser;
        } else {
            console.log("no user FOund");
        }

    } catch (error) {
        return null;
    }
    return null;
 }

 async logout(){
    try {
        await this.account.deleteSessions();

    } catch (error) {
        console.log("logout :: ERROR " ,error);
    }
 }

}

const authservice = new AuthService();

export default authservice;