let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수문자 출력 방법
string = '"안녕!"';
console.log(string);

string = '안녕!\nJay!\t\tMy name is';
console.log(string);

// Template Literal
let id = 'jay';
let greetings = "'hi!, " + id +"\nhave a nice day!'";
console.log(greetings);

greetings = `'hi, ${id}
have a nice day!'`;
console.log(greetings);