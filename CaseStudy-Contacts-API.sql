--Create and use a Database

create database GEPDB
use GEPDB

--Create a table

create table contact
(
	id int identity(1,1),
	firstname varchar(30),
	lastname varchar(30),
	gender varchar(30),
	dob varchar(30),
	email varchar(30),
	phone varchar(30),
	city varchar(30),
	state varchar(30),
	country varchar(30),
	picture varchar(100)
);
-- id here starts from 1, increments next id by 1 for every new insertion
-- So we don't need to enter id seperately.

select * from contact

insert into contact values ('Cat','Doraemon','Male','1883.01.01','doraemon@gmail.com','11111','Study Table 1','Tokyo','Japan','.\assets\Doraemon.jpg')
insert into contact values ('Cat','Dorami','Female','1893.01.01','dorami@gmail.com','22222','Study Table 2','Future','Multiverse','.\assets\Dorami.jpg')
insert into contact values ('Cat','Dorami dup','Female','1893.01.01','dorami@gmail.com','22222','Study Table 2','Future','Multiverse','.\assets\Dorami.jpg')
insert into contact values ('Hero','Nobitha','Male','1902.04.27','nobitha@gmail.com','33333','Home1','Tokyo','Japan','.\assets\Nobitha.jpg')
insert into contact values ('Heroine','Shizuka','Female','1901.08.28','shizuka@gmail.com','44444','Home2','Tokyo','Japan','.\assets\Shizuka.jpg')

insert into contact values ('Stylish','Sunio','Male','1991.04.04','sunio@gmail.com','66666','Home4','Tokyo','Hawai','.\assets\Suneo.jpg')



drop table contact


-- If we remove any particular Value in this table and run the Project then we wont be able to see it in the Website.