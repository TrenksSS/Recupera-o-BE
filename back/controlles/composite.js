const funci = (lista)=>{
    lista.forEach(e => {
        e.ordem = [];
        let or = {};
        or.descricao = e.descricao;
        or.custo = e.custo;
        e.ordem.push(or);
        delete e.descricao;
        delete e.custo;
    });

    let liAux = []; 
    let lip = 0 
    liAux.push(lista[lip]);
    for(i = 1; i < lista.length; i++) {
        if(lista[i].id_funcionario == lista[i-1].id_funcionario){
            let or = {};
            or.tipo = lista[i].ordem[0].descricao;
            or.custo = lista[i].ordem[0].custo;
            liAux[lip].ordem.push(or);
        }else{
            liAux.push(lista[i]);
            lip++;
        }
    }
    return liAux;
}
    module.exports = {
        funci
    }
