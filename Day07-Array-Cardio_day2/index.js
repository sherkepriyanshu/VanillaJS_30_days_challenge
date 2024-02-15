const people = [
    { name: "wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const commets = [
    { text: "love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen in my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];

//some and every checks
//array.prototype.some() // is at least one person 19
//array.prototype.every() //is everyone 19?

const allAdults = people.some(function (person) {
    const year = new Date().getFullYear();
    if (year - person.year >= 19) {
        
        return true;
    }
});
console.log(allAdults);


const allAdults2 = people.some(person => (new Date()).getFullYear() - person.year>=19);
console.log(allAdults2);


const adults = people.every(function(person) { 
    const year = new Date().getFullYear();
    if (year - person.year >= 19) {
        
        return true;
    }
});
console.log(adults)

//array.prototype.find()
//find is like filter , but instead returns just the one you are looking for
//find the comment with the ID of 823423
//return first item it finds

const  comment = commets.find(function(comment)
{
    if(comment.id===823423)
    {
        return true;
    }
});

console.log(comment)

const comment1 = commets.find(commet => (commet.id===823423));
console.log(comment1);

//Array.prototype.findIndex()
//find the comment with this ID
//delet the comment with ID of 823423
const index = commets.findIndex(comment =>comment => comment.id ===823423);
console.log(index);

//commets.splice(index,1);

const newComments =[
    ...commets.slice(0,index),
    ...commets.slice(index+1)
];

console.log(newComments);
console.table(newComments);