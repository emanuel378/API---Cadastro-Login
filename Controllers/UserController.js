import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// CORREÇÃO: Adicionado o 'o' em criarUsuario
import { filtraremail, criarUsuario, listarUsuarios } from "../repositories/UserRepository.js";

import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.SECRET;

export const listar = (req,res)=>{
    listarUsuarios((err,resultado)=>{
        if(err){
            return res.status(500).json({erro: "Erro ao buscar usuário"})
        }
        return res.status(200).json(resultado);
    })
}

export const register = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: "Email e senha são obrigatórios" });
        }

        filtraremail(email, async (err, resultado) => {
            if (err) {
                return res.status(500).json({ erro: "Erro ao consultar o banco de dados" });
            }

            if (resultado && resultado.length > 0) {
                return res.status(400).json({ erro: "Usuário já cadastrado" });
            }

            const senhaHash = await bcrypt.hash(senha, 10);

            // CORREÇÃO: Nome da função ajustado para criarUsuario
            criarUsuario(email, senhaHash, (err) => {
                if (err) {
                    return res.status(500).json({ erro: "Erro ao salvar o usuário",err });
                }
                return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
            });
        });
    } catch (error) {
        return res.status(500).json({ erro: "Erro interno no servidor" });
    }
};

export const login = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ erro: "Email e senha são obrigatórios" });
    }

    filtraremail(email, async (err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao consultar o banco" });
        }

        if (!results || results.length === 0) {
            return res.status(401).json({ erro: "E-mail ou senha incorretos" });
        }

        const user = results[0];
        const senhaValida = await bcrypt.compare(senha, user.senha);

        if (!senhaValida) {
            return res.status(401).json({ erro: "E-mail ou senha incorretos" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email }, 
            SECRET, 
            { expiresIn: "1h" }
        );

        return res.json({ 
            mensagem: "Login realizado com sucesso!", 
            token 
        });
    });
};