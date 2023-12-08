const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]
/*
Steps:
1. shuffle array ? possibly make a second array to be shuffled array
2. create object
3. object value will equal shuffled array at an index if key != array[index]

how to shuffle array
could use a rng from 0 to array.length and assign
a value to that array index if it is not undefined

some iterates through array and returns all comparison booleans
-> any false will push the randomNumber and not reroll it
-> increase length === more false and more pushing without rerolling
What do i do to only have one true and then push
and if it's false then reroll?

maybe make another function?


what if i slice 
array.slice(0, random)

 */

function reroll() {
    /*
    let random number = 0;
    firstArray = [2,3,45,5,6];
    secondArray = [];

    need to secondArray.push(firstArray[randomnumber]);
    
    if secondArray.some === true then return 

    -> function will end and when you call function...
        -> new random number will appear 

    */
}

function randomizeArray(arr){
    for(let i = arr.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i+1));
        [arr[i] = arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr
}

function setPairs(){

}

function generateSecretSantaPairs(arr) {
    const shuffledArray = [...arr];
    console.log(shuffledArray);
    randomizeArray(shuffledArray);
    const results = {};

    for(let i = 0; i < arr.length; i++){
        let santa = shuffledArray[i];
        let recipient = (i + 1) % shuffledArray.length;
        let mathtest = 24% 5;
        console.log("RECIPIENT:", recipient, "length of shuffled array: ", shuffledArray.length, "i: ", i, "testing math: ", mathtest )

        results[santa] = shuffledArray[recipient]
        console.log("results array: ", shuffledArray)
    }
    return results

}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */