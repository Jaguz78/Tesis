create database if not exists proyecto;
use proyecto;
create table if not exists usuario(
	id_usuario varchar(50) primary key,
    contraseña varchar(100),
    rol varchar(100)
);
create table if not exists asesor(
	id_asesor int primary key,
    nombre varchar(100),
    id_usuario varchar(50), 
    state boolean,
    constraint `FK_AsesorUsuario` foreign key (`id_usuario`) references `usuario` (`id_usuario`)
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
    constraint `FK_TesisUsuario` foreign key (`id_estudiante`) references `estudiante` (`id_estudiante`)
);
create table if not exists tesis_asesor(
	id_tesis_asesor int primary key auto_increment,
    id_tesis int,
    id_asesor int,
    constraint `FK_TesisAsesor1` foreign key (`id_tesis`) references `tesis` (`id_tesis`),
    constraint `FK_TesisAsesor2` foreign key (`id_asesor`) references `asesor` (`id_asesor`)
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
    posterior int,
    anterior int,
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
insert into usuario (id_usuario, contraseña, rol) values
	('admin', 'admin123', 'administrador'),
    ('202146223', 'mani0320', 'estudiante'),
	('202045889', 'juanito60', 'asesor');
insert into asesor (id_asesor, nombre, id_usuario, state) values
	(1, 'Juan Aguilar', '202045889', true);
insert into estudiante (id_estudiante, id_usuario, sede, nombre, carrera) values
	(1, '202146223', 'Centro Universitario del Norte', 'Edgar Gonzalez', 'Ingenierira en Ciencias y Sistemas');
insert into formato (nombre_seccion, tamaño_fuente, mayuscula, cursiva, negrita, alineacion, max_caracteres) values
	('Primer nivel', 14, true, false, true, 'centrado', 48),
    ('Segundo nivel', 12, false, false, true, 'izquierdo', 48),
    ('Tercer nivel', 12, false, false, true, 'izquierdo', 48),
    ('Cuarto nivel', 12, false, true, true, 'izquierdo', 48),
    ('Quinto nivel', 12, false, true, true, 'izquierdo', 48);