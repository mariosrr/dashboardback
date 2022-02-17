import sql from "mssql";

const dbSettings = {
    user: '',
    password: '',
    server: '',
    database: '',
    port: ,
    trustServerCertificate: true
};


export async function getConnection(){
    try{
    const pool = await sql.connect(dbSettings);
    return pool;
    } catch(error){
        console.error(error);
    }
}
