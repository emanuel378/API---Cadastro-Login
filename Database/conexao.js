import mysql from 'mysql2'

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conexao.connect((error)=>{
    if(error){
        console.log("A conexão do banco de dados falhou", error)
        console.log("HOST:", process.env.DB_HOST)
        console.log("PORT:", process.env.DB_PORT)
    }else{
        console.log("Conexão foi bem feita")
    }
})

export default conexao