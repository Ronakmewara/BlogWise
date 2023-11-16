import {   ID , Storage , Query , Client , Databases,} from 'appwrite'
import  confenv  from '../envconf/confenv'
 
 

export class PostService{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(confenv.appwriteUrl).setProject(confenv.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , content , featuredImage , status , userId}){
        try {
           
             return await this.databases.createDocument(
                confenv.appwriteDatabaseId, confenv.appwriteCollectionId,
                ID.unique(),
                {
                    title ,
                    content, 
                    featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            console.log("CreatePost :: Error ::" , error);
        }
    }

    async updatePost(slug , {title ,content , featuredImage , status}){
            try {
                return await this.databases.updateDocument(
                    confenv.appwriteDatabaseId, confenv.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status
                    }
                )

            } catch (error) {
                console.log("Error :: Update Post::" ,error);
            }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                confenv.appwriteDatabaseId, confenv.appwriteCollectionId,
                slug,

            )
            return true
        } catch (error) {
            console.log("DeletePost :: Error::" ,error);
            return false
        }
    }

    async getPost(slug){
         
        try {
            return await this.databases.getDocument(
                confenv.appwriteDatabaseId, confenv.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("GetPost :: Error::" ,error);
            return false
        }
    }

    //get only limited Posts

    async getLimitedPosts(queries = [Query.equal("status" , "active") , Query.limit(3)]){
        try {
            
            return await this.databases.listDocuments(confenv.appwriteDatabaseId,
                confenv.appwriteCollectionId, queries);

        } catch (error) {
            console.log("get Limited Posts :: ERROR" , error);
        }
    }

    async getPosts(queries = [Query.equal("status" , "active") ]){
        try {
            return await this.databases.listDocuments(
                confenv.appwriteDatabaseId, confenv.appwriteCollectionId,
                queries
                
            )
        } catch (error) {
            console.log("GetPosts :: Error::" ,error);
        }
        
    }

    // file Upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                confenv.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }


    async deleteFile(fileId){
            try {
                await this.bucket.deleteFile(
                    confenv.appwriteBucketId,
                    fileId
                )
                return true
            } catch (error) {
                console.log("DeleteFile :: Error::" ,error);
                return false
            }
    }

  getFilePreview(fileId){
            return    this.bucket.getFilePreview(
                confenv.appwriteBucketId,
                fileId
            )
    }
}

const postService = new PostService();

export default postService;