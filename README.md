# landing-page-beAcademy
## Criando um site voltado para cursos de programação, como projeto final!
### Neste projeto serão tratados semânticas de html, estilos CSS, manipulação de DOM com JavaScript, Banco de dados com Mysql e Excel
---------------------------
## Criando o database MySql

- CREATE DATABASE db_zero_to_hero;
- CREATE TABLE users (id_user INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(60), email VARCHAR (60), curso VARCHAR (60));
- CREATE TABLE comments (id_comment INT PRIMARY KEY AUTO_INCREMENT, user_comment VARCHAR (60), comment VARCHAR (255));

---------------------------

### Comandos básicos de MySql:

- INSERT INTO table_name (params) VALUES ();
- SELECT * FROM table_name;
- UPADATE table_name SET param = 'change new value' WHERE param = 'old value';
- DELETE FROM table_name WHERE param = 'value';
- SELECT * FROM table_name AS a JOIN other_table AS b ON a.column_table_name = b.column_other_table;
- SELECT a.columA, b.columB FROM first_table AS a INNER JOIN other_table AS b ON a.columA = b.columB;


