Create DB if not exists wishes_db;

use wishes_bd;

create table if not exists wishes(
    id int not null auto_increment,
    task varchar(255) not null,
    primary key (id)
); 

insert into wishes (task) values ("Win the lottery")
insert into wishes (task) values ("You know what I want")

select*from tasks; 