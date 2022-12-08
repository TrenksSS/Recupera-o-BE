
class funcionario {
    constructor(data) {
        this.id_funcionario = data.id_funcionario;
        this.nome = data.nome;
        this.especialidade = data.especialidade;
    }
    static read = () => {
        return "SELECT * FROM funcionarios";
    }
    static readAll = (model) => {
        return `SELECT * FROM vw_info WHERE id_funcionario = ${model.id_funcionario}`;
    }
    static create(data) {
        return `INSERT INTO funcionarios VALUES(default,'${data.nome}','${data.especialidade}')`
    }
    static update(data) {
        return `UPDATE funcionarios SET nome = '${data.nome}', especialidade = '${data.especialidade}' WHERE id_funcionario = ${data.id}`;
    }
    static delete(model) {
        return `DELETE FROM funcionarios WHERE id_funcionario = ${model.id_funcionario}`;
    }
}
module.exports = funcionario;