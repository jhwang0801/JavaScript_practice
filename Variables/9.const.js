// let 재할당 가능
let a = 1;
a = 2;


// const 재할당 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; // TypeError: Assignment to constant variable. 에러 발생 // 이렇게 하면 안됨


// 1. 상수(상수는 항상 대문자로!! 단어와 단어 사이는 underscore로!!)
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
};
// apple = {}; 이렇게하면 에러 또 발생함
console.log(apple);
apple.color = 'green';
apple.display = '🍏';
console.log(apple);
