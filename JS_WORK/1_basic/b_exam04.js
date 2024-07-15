console.log(5  == 5); // true
console.log(5  == '5'); //true
console.log(5  === '5');  // false

console.log(0  == ''); //true
console.log(true  == 1); //true

//for... in VS for...of
const gilDong = {
   name : '홍길동',
   year : 2000,
   company : 'KCC'
}

//for...in => key (객체)
for(let key in gilDong) {
  console.log(key);
  console.log(gilDong[key]);
}

const kccMember = ['노승우', '김상학', '황철원', '송예림'];
console.log('================================================================');
for(let key in kccMember) {
  //console.log(key); //index
  console.log(`$${key}: ${kccMember[key]}`);
}

for(let value of kccMember) {
  console.log(value);
}

console.log('Cat' || 'Dog');

let event = '';

event= event || '영화보기';
console.log(event);

if(event) {  //값이 있기 때문에 true
  console.log('놀기');
}
else {
  console.log('일하기');
}

//const a = '10';