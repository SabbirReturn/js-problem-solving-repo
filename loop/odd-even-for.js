// Find all the odd numbers from 61 to 100.

for( let i= 61; i<=100; i++){
    // console.log(i);
    if(i % 2 !==0){
        console.log('Odd Number', i);
    }
}

// // Find all the even numbers from 78 to 98.

for( let i = 78; i<=98; i++){
    if( i % 2 ===0){
        console.log('Even Number',i);
    }
}

// while and for, both are push that code.

for ( let i = 78; i<=98; i++){
    if(i % 2 ===0){
        console.log('Even Num',i);
    }
    else if ( i % 2 !==0){
        console.log('Odd num', i);
    }
    else{
        console.log('General number',i);
    }
}