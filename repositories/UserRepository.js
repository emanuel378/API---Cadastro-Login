import conexao from "../Database/conexao.js";

export function filtraremail(email, callback) {
  conexao.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    callback
  );
}

export function criarUsuario(email, senha, callback) {
  conexao.query(
    "INSERT INTO users (email, senha) VALUES (?, ?)",
    [email, senha],
    callback
  );
}
export function listarUsuarios(callback) {
  conexao.query("SELECT idCadastro, email FROM users", callback);
}