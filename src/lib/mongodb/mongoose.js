import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery',true);

    if (initialized){
        console.log("Mongo 🐵 Happy");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"mern-clerk-vercel",
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        console.log('Mongo 🐵 Very Happy')
        initialized = true;
    }catch (error){
        console.log('Mongo 😟 Not working',error);
    }
}