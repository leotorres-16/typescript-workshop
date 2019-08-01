const Fizzbuzz = (number: number):number | string => {
    if(number % 3 === 0) {
        if(number % 5 === 0){
            return "FizzBuzz"
        }
        return "Fizz";
    }
    if(number % 5 === 0) {
        return "Buzz";
    }
    return number;
}

export default Fizzbuzz;