create database if not exists proyecto;
use proyecto;
create table if not exists junta(
	id_junta int primary key auto_increment,
    grupo varchar(250),
    rol varchar(250),
    profesion varchar(250),
    nombre varchar(250),
    año varchar(100)
);
create table if not exists usuario(
	id_usuario varchar(50) primary key,
    contraseña varchar(100),
    rol varchar(100)
);
create table if not exists estudiante(
	id_estudiante int primary key,
    id_usuario varchar(50),
    sede varchar(250),
    nombre varchar(100),
    carrera varchar(250),
    constraint `FK_EstudianteUsuario` foreign key (`id_usuario`) references `usuario` (`id_usuario`)
);
create table if not exists tesis(
	id_tesis int primary key auto_increment,
    fecha date,
    titulo varchar(250),
    enlace_pdf text,
    id_estudiante int,
    state boolean,
    id_junta int,
    constraint `FK_TesisUsuario` foreign key (`id_estudiante`) references `estudiante` (`id_estudiante`)
);
create table if not exists formato(
	id_formato int primary key auto_increment,
    nombre_seccion varchar(100),
    tamaño_fuente int,
    mayuscula boolean,
    cursiva boolean,
    negrita boolean,
    alineacion varchar(100),
    max_caracteres int
);
create table if not exists seccion(
	id_seccion int primary key auto_increment,
    valor longtext,
    posicion int,
    id_formato int,
    constraint `FK_SeccionFormato` foreign key (`id_formato`) references `formato` (`id_formato`)
);
create table if not exists tesis_seccion(
	id_tesis_seccion int primary key auto_increment,
    id_tesis int,
    id_seccion int,
    constraint `FK_TesisSeccion1` foreign key (`id_tesis`) references `tesis` (`id_tesis`),
	constraint `FK_TesisSeccion2` foreign key (`id_seccion`) references `seccion` (`id_seccion`)
);
insert into formato (nombre_seccion, tamaño_fuente, mayuscula, cursiva, negrita, alineacion, max_caracteres) values
	('Titulo 1', 14, true, false, true, 'centrado', 48),
    ('Titulo 2', 14, false, false, true, 'izquierda', 48),
    ('Titulo 3', 12, false, false, true, 'izquierda', 48),
    ('Titulo 4', 12, false, true, true, 'izquierda', 48),
    ('Parrafo', 12, false, false, false, 'justificado', null);