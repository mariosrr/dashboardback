import sql from "mssql";

const dbSettings = {
    user: 'masterWisdomFwd',
    password: 'zSJmrxr4e7YF6zfw3s9vwwySwb2Ex8M6',
    server: 'wisdom.op-cloud.net',
    database: 'aduana',
    port: 23688,
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