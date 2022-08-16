let a = true;
let b = false;
console.log(a);
console.log(b);

// 활용 -> boolean에 해당하는 변수명은 is~~로 사용
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

// Falshy 거짓인 값
console.log(!!0); // !!를 사용하면 특정값을 boolean type으로 변환해줌(!! 연산자 사용)
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);