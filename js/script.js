// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

for (var x=1; x <= 100; x++){
    if( (x % 3 != 0) && (x % 5 != 0) ) {
        document.write(x);
// != potrebbe essere tolto  e risultate quindi if( x % 3 && x % 5 ) e comunque non andrebbe a segnare nel browser numeri multipli 3 e 5

// stabiliamo regole per x multiplo 3 e 5
    } else {
        if( x % 3 == 0 ) {
            document.write("Fizz");
        }
        if( x % 5 == 0 ) {
            document.write("Buzz");
        }
    }
  document.write('<br>'); //break per mandare a capo ogni numero
}
