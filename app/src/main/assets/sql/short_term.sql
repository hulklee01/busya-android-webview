create table short_term (
num int not null primary key identity(1,1),
id varchar(10) not null,
name varchar(10) not null,
date varchar(15) not null,
dest varchar(20) not null,
car int not null,
price int not null,
time varchar(5) not null
);