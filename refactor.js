
console.log(fx(12));

//                                            Function before refactoring

// function fx(n){
//     d=(new Array(n+1)).join('x').split('').reduce((d,v,i)=>{
//         J=2*i+1+(i&1)
//         //sum+=J;
//         return d+=J+(J+1-2*i+1)
//     },-1-Math.floor(n/2)*2)
//     return d-(n-2)
// }



//                         Code after refactoring focusing on readability and performance
//                      Created separate function for the operations taking place every time


function fx(n){
    d=(new Array(n+1)).join(' ').split('');
    d=d.reduce((d,v,i)=>fx1(d,i),fx2(n));
    return d-(n-2);
}

function fx1(d,i){
    J=2*i+1+(i&1)
    return d+=J+(J+1-2*i+1)
}

function fx2(n){
    n=-1-Math.floor(n/2)*2;
    return n;
}