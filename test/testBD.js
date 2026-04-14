import { filtraremail, criarUsuario } from "../repositories/UserRepository.js";
criarUsuario("emanuelm@gmail.com","12345",(error,resultado)=>{
    if(error){
        console.log(`Erro: ${error}`)
    }else{
        console.log(`Sucesso: ${resultado}`)
    }
})




filtraremail("emanuelm0@gmail.com",(err,resultado)=>{
    if(err){
        console.log(`Erro: ${err}`)
    }else{
        console.log(`Sucesso: ${resultado}`)
    }
})