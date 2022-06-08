
const a = 10;
const b = 20;

function sum(a,b){
    if(typeof a != "number" || typeof b !="number")
        return -1;
    
    const result = a+b;
    return result;
}
console.log(sum(a,b));

const myChildren = ("Kien","Lam")
const running = function(){
    return "variable running";
};
const myInfo={
    name: "Dat",
    age: 20,
    isStatus: true,
    street:{
        name: "Ha Noi",
        address:"Yen Hoa",
    },
    running: function(){
        return "object running";
    },
};
console.log(running());
console.log(myInfo.running());
