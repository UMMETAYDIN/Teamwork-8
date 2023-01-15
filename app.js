// 8. soru************

// let daltones = ['joe', 'Jack', 'Willam', 'Averell']
// let sonuc =daltones.shift()
// console.log(sonuc)

// daltones.pop()
// console.log(daltones)



// 9******************

// let daltones = ['joe', 'Jack', 'Willam', 'Averell']
// for(let i =0; i< daltones.length; i++){
// if(i == 1){
// continue;
// }
// console.log(daltones[i]);
// }

// 10.******************

// let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk']
// avengers.splice(2,1,'Thor', 'Hawkeye');


// 11***********************

// let fullStack = {
//     languages: ["JavaScript", "React", "HTML"],
//     jira: true,
//     gitHub: true,
//     difficulty: 8,
//     }

   

//     console.log(fullStack.languages[0]);
//     console.log(fullstack.`languages`);




    const myCar = {
        make : 'ford',
        model : 'Mustang',
        year : 1965,
        color : 'Black',


        age: function() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    console.log(myCar.age()) 

