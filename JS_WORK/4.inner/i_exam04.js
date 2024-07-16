/**
 * 정규표현식(RegExp)
 * => 자바와 API는 다름
 */

//1. 문자열.match(/정규표현식/) => 매칭된 결과(문자열)리턴

// const result = 'sports'.match(/sp/);
// console.log(result); // ["sp"]

// //2. ReqExp.exec('문자열') => 매칭된 결과(문자열) 리턴
// const str = 'sdfsddfd dfsfqweqsdfdsfsdsfsgs'
// const re = /FS/ig; //i:소대문자 구분없이, g: 전역검사
// let result2 = re.exec(str);

// while(result2) {
//   console.log(result2);
//   result2 = re.exec(str);
// }

//퀴즈> => July 16 2024
// const str = 'This is a data: July 16 2024';
// const re = /\bJuly\s+\d+\s+\d{4}\b/ig;
// //const re = /\w*\s\d+\s\d+/;
// //const result = str.match(re);
// //console.log(result);

// let result = re.exec(str);

// while(result) {
//   console.log(result);
//   result = re.exec(str);
// }

//퀴즈> 문자열.replace(정규표현식, '문자열') sw => 소프트웨어 변경
// const str = '오늘 우리는 SW 세상에서 살고 있다. sw가 매우 중요한 시기이다. 그래서 SW 열심히 공부하자.'

// const result = str.replace(/sw/ig, '소프트웨어');

// console.log(result);

//그룹을 만들어 핸들링
// const str = 'Java--JavaScript';
// const re = /(\w+)-*(\w+)/;

// const result = str.replace(re, "$2-$1");

// console.log(result);


// 이메일 체크 (정규표현식)
// 정규표현식.test(문자열) => 해당 문자열이 정규표현식에 매칭 유무 (true/false) 리턴
//정상 : dolsam77@nate.com
//비정상 : 33dolsam77@nate.com
//비정상 : dolsam77nate.com
//비정상 : dolsam77@nate.comfdsfdsaf;

const email = 'dolsam77@nate.com';
const email1 = '33dolsam77@nate.com';
const email2 = 'dolsam77nate.com';
const email3 = 'dolsam77@nate.comfdsfdsaf';

const re = /^[^0-9]+[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[com]+$/;
//const re = /^/D\w+@\w+\.\w{2,3}$/ig;
//const result = re.test(email);
// if (result) {
//   console.log('정상');
// }
// else {
//   console.log('비정상');
// }

console.log(re.test(email)); // true
console.log(re.test(email1)); // false
console.log(re.test(email2)); // false
console.log(re.test(email3)); // false