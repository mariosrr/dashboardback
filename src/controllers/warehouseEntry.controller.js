import { getConnection } from "../database/connection";

export const getEntries = async(req,res) => {
    const pool = await getConnection();
    const result = await pool.request().query("select * from clientes");
    console.log(result);

    res.json(result.recordset);
}