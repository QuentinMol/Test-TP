//Quentin Molinié - FIPA 3
//Fichier Util.js
//30/01/2018

Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};


/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {

    if (n < 0) {
        throw 'Unable to compute arrangement for n < 0'
    }

    if (r < 0) {
        throw 'Unable to compute arrangement for r < 0'
    }

    if ((n-r) < 0) {
        throw 'Unable to compute arrangement for n-r < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }


    return Util.factorial(n)/Util.factorial(n-r);
};


/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {

    if (n < 0) {
        throw 'Unable to compute combination for n < 0'
    }

    if (r < 0) {
        throw 'Unable to compute combination for r < 0'
    }

    if ((n-r) < 0) {
        throw 'Unable to compute combination for n-r < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    return (Util.factorial(n))/(Util.factorial(r) * Util.factorial(n-r));

};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {

    if (n < 2) {
        throw 'Unable to compute isPrime for n < 2'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    var racine = Math.floor(Math.sqrt(n));

    j=1;

    do {
        j++;
    } while(j <= racine && n%j != 0);

    if(j > racine) {

        return true;

    }
    else{

        return false;
    }

};


/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {

    if (n < 2) {
        throw 'Unable to compute sumPrime for n < 2'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    var sum = 0;

    for(i=2;i<=n;i++){
        if(Util.isPrime(i)==true)
            sum += i;
        else
            ;
    }

    return sum;

};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {

	var tab = [];
	var i;

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

	for(i=0;i<n;i++){

		if((i+1)%3==0 && (i+1)%5==0)
	   		tab[i]="FizzBuzz";

		else
			if((i+1)%3==0)
	   			tab[i]="Fizz";
			else
				if((i+1)%5==0)
	   				tab[i]="Buzz";
				else
					tab[i]=i+1;
	}

	return tab;

};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {

    var cipher = "";

    for(var i=0;i<phrase.length;i++){

        if((phrase.charCodeAt(i)==32)||((phrase.charCodeAt(i)>=65)&&(phrase.charCodeAt(i)<=90))||((phrase.charCodeAt(i)>=97)&&(phrase.charCodeAt(i)<=122))){

            if(phrase.charCodeAt(i)==32){
                cipher += " ";
            }
            else{
                if(phrase.charCodeAt(i)==90){
                    cipher += String.fromCharCode(65);
                }
                else{
                    if(phrase.charCodeAt(i)==122){
                        cipher += String.fromCharCode(97);
                    }
                    else{
                        cipher += String.fromCharCode(phrase.charCodeAt(i)+1);
                    }
                }
            }
        }
        else{
            throw 'Unable to compute cipher with letters'
        }

    }

    return cipher;

};
