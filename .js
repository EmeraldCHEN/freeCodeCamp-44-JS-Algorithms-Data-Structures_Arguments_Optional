function addTogether(){
    // Storing the arguments in an array
    let argsArray = [...arguments];
    if(argsArray.length === 2){
      //If there are two arguments,check for the type of both arguments
        if(typeof argsArray[0] !== 'number' || typeof argsArray[1] !== 'number'){
            return undefined;
        }else{
            return argsArray[0] + argsArray[1];
        }
    }
    if(argsArray.length === 1){
        if(typeof argsArray[0] !== 'number'){
            return undefined;
        }else{
            // Making use of closure
            return function(secondArgument){
                if(typeof secondArgument !== 'number'){
                    return undefined;
                }else{
                    return argsArray[0] + secondArgument;
                }
            }
        }
    }
}
addTogether(2, 3); // return 5
addTogether(2)(3); // return 5
addTogether(2, "3"); // return undefined
