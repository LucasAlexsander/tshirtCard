const size = document.querySelectorAll('.size');
const color = document.querySelectorAll('.color');
let finalSize = [[],[],[]];
let finalColor = [[],[],[]];
let verification = false; // False = ninguem usando | true = tem alguma classe usando

// console.dir(color);

const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

let aux = [[],[],[]]
let contador = 0;

const elementos = (element, array) => {
    for (let e = 0; e < 5; e++) {
        element[0].push(array[e]);        
    }
    for (let e = 5; e < 10; e++) {
        element[1].push(array[e]);        
    }
    for (let e = 10; e < 15; e++) {
        element[2].push(array[e]);        
    }
}

const select = (param) => {
    param.forEach(elemento => {
        elemento.forEach(e => {
            e.addEventListener('click', event => {
                elemento.forEach(element => {
                    verification = element.className.indexOf('active') != -1 ? false : true;
                });
                if(verification) {
                    elemento.forEach(element => {
                        element.classList.remove('active');
                    })
                    e.classList.add('active');
        
                } else {
                    e.classList.add('active');            
                }
            })
        });
    })
}

elementos(finalSize, size);
elementos(finalColor, color);

// const select = (elemento) => {
//     elemento.forEach(e => {
//         e.addEventListener('click', event => {
//             elemento.forEach(element => {
//                 verification = element.className.indexOf('active') != -1 ? false : true;
//             });
//             if(verification) {
//                 elemento.forEach(element => {
//                     element.classList.remove('active');
//                 })
//                 e.classList.add('active');
    
//             } else {
//                 e.classList.add('active');            
//             }
//         })
//     });
// }

select(finalSize);
select(finalColor);
