import mongoose from "mongoose";

const uri = "";

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(uri, {
            useNewUrlParser: true
        });

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado en ${ url }`);
    } catch (error) {
        console.error(`Error: ${ error.message }`);
        process.exit(1);
    }
}

export default conectarDB;