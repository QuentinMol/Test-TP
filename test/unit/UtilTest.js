describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

describe("Arrangement", function(){
    var n = 5;
    var r = 3;

    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.arrangement(-1,r);
        }
        expect(f).toThrow('Unable to compute arrangement for n < 0');
    });

    it("should raise an exception when r < 0", function(){
        var f = function(){
            Util.arrangement(n,-1);
        }
        expect(f).toThrow('Unable to compute arrangement for r < 0');
    });

    it("should raise an exception when n-r < 0", function(){
        var f = function(){
            Util.arrangement(r,n);
        }
        expect(f).toThrow('Unable to compute arrangement for n-r < 0');
    });


});

describe("Combination", function(){
    var n = 5;
    var r = 3;

    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.combination(-1,r);
        }
        expect(f).toThrow('Unable to compute combination for n < 0');
    });

    it("should raise an exception when r < 0", function(){
        var f = function(){
            Util.combination(n,-1);
        }
        expect(f).toThrow('Unable to compute combination for r < 0');
    });

    it("should raise an exception when n-r < 0", function(){
        var f = function(){
            Util.combination(r,n);
        }
        expect(f).toThrow('Unable to compute combination for n-r < 0');
    });

});

describe("isPrime", function(){

    var testCases = [
        {
            n : 2,
            isPrime : true
        },
        {
            n : 3,
            isPrime : true
        },
        {
            n : 4,
            isPrime : false
        },
        {
            n : 5,
            isPrime : true
        },
        {
            n : 6,
            isPrime : false
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.isPrime + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.isPrime);
        })
    });

    it("should raise an exception when n < 2", function(){
        var f = function(){
            Util.isPrime(1);
        }
        expect(f).toThrow('Unable to compute isPrime for n < 2');
    });

});

describe("sumPrime", function(){


    it("should returns 10 when n = 6", function(){
        var result = Util.sumPrime(6);
        expect(result).toEqual(10);
    });

    it("should returns 17 when n = 8", function(){
        var result = Util.sumPrime(8);
        expect(result).toEqual(17);
    });

    it("should raise an exception when n < 2", function(){
        var f = function(){
            Util.sumPrime(1);
        }
        expect(f).toThrow('Unable to compute sumPrime for n < 2');
    });

});

describe("FizzBuzz", function(){


	var tab = [1, 2,'Fizz', 4, 'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'];


		for(i=0;i<15;i++){

			if((i+1)%5==0 && (i+1)%3==0){
				var index = i+1;
				it("should returns 'FizzBuzz' when n = "+index, function(){
					var result = Util.fizzBuzz(15);
					expect(result[i]).toEqual(tab[i]);
				});				
			}
			else{
				if((i+1)%3==0){
					var index = i+1;
					it("should returns 'Fizz' when n = "+index, function(){
						var result = Util.fizzBuzz(15);
						expect(result[i]).toEqual(tab[i]);
					});	
				}
				else{

					if((i+1)%5==0){
						var index = i+1;
						it("should returns 'Buzz' when n = "+index, function(){
							var result = Util.fizzBuzz(15);
							expect(result[i]).toEqual(tab[i]);
						});	
					}
					else{
						var index = i+1;
						it("should returns "+index+" when n = "+index, function(){
							var result = Util.fizzBuzz(15);
							expect(result[i]).toEqual(tab[i]);
						});		
					}

				}


			}
		    
		}


});