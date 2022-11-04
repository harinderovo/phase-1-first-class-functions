function receivesAFunction(parameter) {
    parameter();
}

function returnsANamedFunction(){
    return named;
}
function named(){}

function returnsAnAnonymousFunction() {
    return function () {
} 
}

// function iLikeToys(parameter) {
//     return parameter; 
// }
// iLikeToys('cars');
// console.log(iLikeToys('bat'));