drop database if exists ordems;
create database ordems charset=UTF8 collate utf8_general_ci;
use ordems;

create table funcionarios(
    id_funcionario integer  auto_increment not null primary key,
    nome varchar(100) not null,
    especialidade varchar(20) not null
);
create table ordem(
    id_ordem integer  auto_increment not null primary key,
    funcionario integer not null,
    descricao varchar(100) not null,
    custo varchar(10) not null,
    foreign key (funcionario) references funcionarios(id_funcionario) on delete cascade
);

insert into funcionarios values(default,'Ana', 'encanador/a');
insert into funcionarios values(default,'Juliana', 'pedreiro/a');
insert into funcionarios values(default,'Fabiana', 'pintor/a');
insert into funcionarios values(default,'Ivana', 'eletricista');

insert into ordem values(default,'1','consertar chuveiro', '50');
insert into ordem values(default,'1','consertar vaso ', '50');
insert into ordem values(default,'1','limpar pia', '300');
insert into ordem values(default,'2','fazer muro', '150');
insert into ordem values(default,'2','colocar caixa de gordura', '600');
insert into ordem values(default,'3','consertar tomada', '200');
insert into ordem values(default,'4','trocar luz', '50');


create view vw_info as
select f.id_funcionario, f.nome, f.especialidade, o.id_ordem, o.funcionario, o.descricao from funcionarios f
inner join ordem o on o.funcionario = f.id_funcionario;




select * from funcionarios;
select * from ordem;
select * from vw_info;