import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query} from 'appwrite';

export class Service {

    client = new Client();
    Databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
           this.Databases = new Databases(this.client);
           this.bucket = new Storage(this.client);  
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.Databases.client(
                conf.appwriteProjectId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )


        }catch(error){
            throw(error)
        }

    }

    async updatePost( slug,{title,content,featuredImage,status}){
        try{
            return await this.Databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );

        }catch(error){
            throw(error)
        }
    }
    async deletePost(slug){
        try{
            await this.Databases.deleteDocument(
                conf.appwriteDataBaseId ,
                conf.appwriteCollectionId,
                slug,
            )
            return true;

        }catch(error){
            throw(error);
            return false
        }

    }
    async getPost(slug){
        try{

            return await this.Databases.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
            )

        }catch(error){
            throw(error);
            return false
        }

    }

    async getPosts(queries=[Query.equal("status","active")]){

        try{
            return await this.Databases.listDocuments(
                    conf.appwriteDataBaseId,
                    conf.appwriteCollectionId,
                    queries,

            )


        }catch(error){
            throw(error);
            return false
        }

    }

    //file upload sevice

    async uploadFile(file){
     try{
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file,
        )

     }catch(error){
        throw(error)
     }

    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true

        }catch(error){
            throw(error);
            return false
        }

    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service