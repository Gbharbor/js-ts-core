// DATE - Manipulação de datas
let d = new Date(); // Cria uma nova data com a data e hora atuais
console.log(d); // Exibe a data completa com todos os detalhes
console.log(d.toDateString()); // Exibe a data de forma resumida (sem a hora)
console.log(d.toUTCString()); // Exibe a data no fuso horário UTC (padrão internacional)
console.log(d.toString()); // Exibe a data completa como string

// Criando uma data específica com 7 parâmetros: ano, mês, dia, hora, minuto, segundo, milissegundo
let data = new Date(2020, 0, 1, 12, 30, 12); // Janeiro é 0, então 0 representa Janeiro
console.log(data.toString()); // Exibe a data criada

// Criando uma data a partir de uma string
let data1 = new Date('2020-01-01 15:42:17'); // Data e hora em formato ISO
console.log(data1); // Exibe a data formatada

// Criando uma data com o mínimo de parâmetros: apenas ano e mês
let data2 = new Date('2022-03'); // Março de 2022 (apenas ano e mês)
console.log(data2); // Exibe a data com dia e hora padrão

// Data a partir de 0 milissegundos desde 1 de janeiro de 1970 (epoch time)
let data3 = new Date(0); // Representa o início da era Unix
console.log(data3);

// Exibindo a data anterior no formato UTC
console.log(data3.toUTCString()); // Exibe em formato UTC

// Criando uma data com um número específico de milissegundos após 1 de janeiro de 1970
let data4 = new Date(123142341); // Representa 123142341 milissegundos depois do epoch time
console.log(data4.toUTCString()); // Exibe em UTC

// Criando uma data antes de 1970 usando milissegundos negativos
let data5 = new Date(-1234234123412); // Data antes do epoch time
console.log(data5.toUTCString()); // Exibe em UTC

// Métodos para obter informações específicas da data
let dat = new Date();
console.log(dat.getFullYear()); // Obtém o ano completo atual
console.log(dat.getMonth()); // Obtém o mês atual (Janeiro é representado por 0)
console.log(dat.getDay()); // Obtém o dia da semana atual (Domingo é 0)
console.log(dat.getDate()); // Obtém o dia do mês atual
console.log(dat.getHours()); // Obtém a hora atual
console.log(dat.getMinutes()); // Obtém os minutos atuais
console.log(dat.getMilliseconds()); // Obtém os milissegundos atuais
console.log(dat.getSeconds()); // Obtém os segundos atuais

// Obtendo o tempo em milissegundos desde o epoch time
console.log(dat.getTime()); // Retorna o tempo em milissegundos
console.log(Date.now()); // Similar a getTime(), mas usado diretamente na classe Date

// Manipulando datas - alterando valores de ano, mês, dia, etc.
let d1 = new Date();
d1.setFullYear(2027); // Define o ano para 2027
d1.setMonth(11); // Define o mês para Dezembro (11)
d1.setDate(15); // Define o dia do mês para 15
d1.setDate(d1.getDate() + 5); // Adiciona 5 dias à data atual
d1.setHours(d1.getHours() + 22); // Adiciona 22 horas à data
d1.setMinutes(d1.getMinutes() - 100); // Subtrai 100 minutos da data

console.log(d1); // Exibe a data alterada com as novas configurações