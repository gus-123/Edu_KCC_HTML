/**
 * Array (배열)
 */

//=> 배열안에 실제 데이터값을 변경할 때

let kccMembers = [
  '진아',
  '수호',
  '한희',
  '채원',
  '주언',
  '연호'
]

console.log(kccMembers);                                                    // [ '진아', '수호', '한희', '채원', '주언', '연호' ]

// push()
console.log(kccMembers.push('승언'));                                       // 승언 추가
console.log(kccMembers);                                                   // 7명

console.log('========================================');

// pop() 
console.log(kccMembers.pop());                                            // '승언' 즉, 마지막 사람이 빠짐
console.log(kccMembers);                                                  // [ '진아', '수호', '한희', '채원', '주언', '연호' ]

console.log('========================================');

// shift()
console.log(kccMembers.shift());                                          // '진아' 즉, 제일 앞에 사람이 빠짐
console.log(kccMembers);                                                  // ['수호', '한희', '채원', '주언', '연호' ]

console.log('========================================');

// unshift()
console.log(kccMembers.unshift('현민'));                                  // 6  / '현민' 즉, 제일 앞에 사람을 넣음
console.log(kccMembers);                                                 // [ '현민', '수호', '한희', '채원', '주언', '연호' ]

console.log('========================================');

//splice()
console.log(kccMembers.splice(0,3));  // 0부터 2까지 뽑고 (갯수)
console.log(kccMembers);  // 나머지 뽑아줌

//=> return 값만 변화시켜 보여줌.
console.log('========================================');

let kccMembers1 = [
  '진아',
  '수호',
  '한희',
  '채원',
  '주언',
  '연호'
]

console.log('========================================');
console.log(kccMembers1);

console.log('========================================');

// concat()
console.log(kccMembers1.concat('승우'));
console.log(kccMembers1); // 불변

console.log('========================================');

// slice()
console.log(kccMembers1.slice(0,4));  // index
console.log(kccMembers1); // 불변

console.log('========================================');

//spread operator
let kccMembers2 = [...kccMembers];
console.log(kccMembers2);

console.log('========================================');

let kccMembers3 = kccMembers;
console.log(kccMembers3);

console.log('========================================');
console.log(kccMembers  === kccMembers3); // true -> kccMembers의 주소값이 같기 때문(call by value)
console.log(kccMembers  === kccMembers2); // false -> kccMembers의 주소값이 달라 한곳의 내용을 변경해도 둘다 변경 되지않는다.

let kccMembers4 = ['홍길동', '박길동', ...kccMembers, '조길동', '한길동'];
console.log(kccMembers4);

let arr1 = [100, 200, 300];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr1)); // 600

console.log('========================================');

//join()
console.log(kccMembers.join());
console.log(kccMembers.join('/'));
console.log(kccMembers.join(', '));

console.log('========================================');

//sort() - default 오름차순
console.log(kccMembers.sort());
console.log(kccMembers.reverse());

let numbers = [1, 8, 3, 4, 5];
console.log(numbers);

numbers.sort((a, b) => a > b ? 1 : -1);
numbers.sort((a, b) => a > b ? -1 : 1);

const books = [
  {
    name: '이것이 자바다',
    price : 30000,
    publisher : '한빛미디어'
  },
  {
    name: '스프링 정석',
    price : 35000,
    publisher : '길벗'
  },
  {
    name: '도커의 완성',
    price : 20000,
    publisher : '이지스퍼블릭'
  }
];

// 과1> 이름을 기준으로 오름차순하고 전체 출력하세요. (for~in, for~of)

//for~in (나 방식)
for(let i in books) {
  books.sort((a, b) => a.name > b.name? 1 : -1);
  console.log(books[i]);
}
console.log('========================================');
books.sort((a, b) => a.name > b.name? 1 : -1);
//for~in (교수님 방식)
for(let i in books) {
 let book = books[i];
 console.log(`책이름: ${book.name}, 가격: ${book.price}, 출판사 : ${book.publisher}`);
}
console.log('========================================');
//forEach
books.forEach((book) => {
  console.log(`책이름: ${book.name}, 가격: ${book.price}, 출판사 : ${book.publisher}`);
});
console.log('========================================');
//for~of
for (let book of books) {
  console.log(`책이름: ${book.name}, 가격: ${book.price}, 출판사 : ${book.publisher}`);
}  

console.log('========================================');
//map은 중요하니깐 한번 더 확인 할것!
let iveMembers = ["유진", "가을", "레이", "원영", "리즈", "이서"];

console.log(iveMembers.map((x) => x)); //[ '유진', '가을', '레이', '원영', '리즈', '이서' ]
console.log(iveMembers.map((x) => `아이브 : ${x}`)); 
/** ['아이브 : 유진', '아이브 : 가을', '아이브 : 레이', 
 * '아이브 : 원영', '아이브 : 리즈', '아이브 : 이서']
 */

console.log(iveMembers.map((x) => {
  if(x === '유진'){
    return `아이브 : ${x}`
  }else{
    return x;
  }
})); //[ '아이브 : 유진', '가을', '레이', '원영', '리즈', '이서' ]

console.log('========================================');
//filter() (전체)
numbers = [1, 8, 7, 4, 9];
console.log(numbers.filter((x) => x % 2 === 0));

//find() (제일처음꺼만)
console.log(numbers.find((x) => x % 2 === 0));

//findIndex() (index)
console.log(numbers.findIndex((x) => x % 2 === 0));

//reduce() (sum) // p는 이전값, n은 현재값 , 0은 초기값
console.log(numbers.reduce((p,n) => p+n, 0));  //29

//퀴즈> iveMembers 변수에 있는 모든 스트링 값들을 더해 보자.
//1번 방법
let a = iveMembers.reduce((p, n) => p + n, '')
let b = Array.from(a).length;
console.log(b);

//2번 방법
console.log(iveMembers.reduce((p, n) => p + n.length, 0));
