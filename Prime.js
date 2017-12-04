function isPrime(n) {
    var sqrt = Math.sqrt(n);
    for(var i=2; i<sqrt; i++) {
        if(n%i==0) {
            console.log(n+" is not Prime.");
            break;
        }
    }
}
isPrime(67280421310721); //Output: NA means it is prime.
isPrime(67280421310722); //Output: 67280421310721 is not Prime.
