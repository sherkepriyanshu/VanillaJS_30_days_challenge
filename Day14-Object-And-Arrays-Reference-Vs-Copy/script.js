let age= 100;
let age2 = age;
console.log(age,age2);
age = 200;
console.log(age,age2);

let name = "pri";
let name2 = "name";

console.log(name,name2);
name = 'sherke';
console.log(name,name2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    const team = players;
    console.log(players,team);

    const team2 = players.slice();
    console.log(team2);
    const team3 = [].concat(players);

    // ES6

    const team4 = [...players];
    team4[3] = ' hee haww';
    console.log(players,team4);

    const person = {
        name: 'Wes Bos',
        age: 80
      };


      const cap1 = person;

      cap1.name= 'priyanshu';
      console.log(cap1);
      console.log(person);

      const cap2  = Object.assign({} , person , { number:10});
      console.log(cap2);
      cap2.age=12;
      console.log(cap2);


      const wes = {
        name:'wes',
        age:100,
        social:{
            twitter:'@wesbos',
            facebook:'wesbos.developer'
        }
        };

      console.clear();
      console.log(wes);


      const dev = Object.assign({},wes);
      const dev2 = JSON.parse(JSON.stringify(wes));

      console.log(dev2);