//Quentin Molinié - FIPA 3
//IntervalTest - Complétion
//30/01/2018



describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    //Cas nominaux
    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });

    //Cas d'erreurs
    var intervalError = new Interval (20,10);
    it("should not overlaps " + testedInterval.toString() + " and " + intervalError.toString(), function () {
        var result = function(){
            testedInterval.overlaps(intervalError);
        }
        expect(result).toThrow("Unable to overlap when interval.end < interval.start");
    });

});

describe("Interval - including", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(15, 16),
        new Interval(10, 20),

    //Cas nominaux
    ].forEach(function (interval) {
        it("should includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22),
        new Interval(8, 12),
        new Interval(17, 22),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should not includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });

    //Cas d'erreurs
    var intervalError = new Interval (20,10);
    it("should not includes " + testedInterval.toString() + " and " + intervalError.toString(), function () {
        var result = function(){
            testedInterval.includes(intervalError);
        }
        expect(result).toThrow("Unable to include when interval.end < interval.start");
    });

});

describe("Interval - Union", function () {
    testedInterval = new Interval(10, 20);

    var interval1 = new Interval(15, 26);
    var interval2 = new Interval(8, 13);

    //Cas nominaux
    it("should union " + testedInterval.toString() + " and " + interval1.toString() + " = [10,26]" , function () {
        expect(testedInterval.union(interval1).toString()).toEqual("[10,26]");
    });

    it("should union " + testedInterval.toString() + " and " + interval2.toString() + " = [8,20]" , function () {
        expect(testedInterval.union(interval2).toString()).toEqual("[8,20]");
    });

    var interval3 = new Interval(15,17);

    it("should union " + testedInterval.toString() + " and " + interval3.toString() + " = [10,20]" , function () {
        expect(testedInterval.union(interval3).toString()).toEqual("[10,20]");
    });    

    var interval4 = new Interval(8, 9);
    var interval5 = new Interval(21, 22);

    //Cas d'erreurs
    it("should not union " + testedInterval.toString() + " and " + interval4.toString(), function () {
        var result4 = function(){
            testedInterval.union(interval4);
        }
        expect(result4).toThrow("Both intervals cannot be union together");
    });

    it("should not union " + testedInterval.toString() + " and " + interval4.toString(), function () {
        var result5 = function(){
            testedInterval.union(interval5);
        }
        expect(result5).toThrow("Both intervals cannot be union together");
    });

    var intervalError = new Interval (20,10);
    it("should not union " + testedInterval.toString() + " and " + intervalError.toString(), function () {
        var result = function(){
            testedInterval.union(intervalError);
        }
        expect(result).toThrow("Unable to union when interval.end < interval.start");
    });

});

describe("Interval - Intersection", function () {
    testedInterval = new Interval(10, 20);

    var interval1 = new Interval(15, 26);
    var interval2 = new Interval(8, 13);

    //Cas nominaux
    it("should intersection " + testedInterval.toString() + " and " + interval1.toString() + " = [15,20]" , function () {
        expect(testedInterval.intersection(interval1).toString()).toEqual("[15,20]");
    });

    it("should intersection " + testedInterval.toString() + " and " + interval2.toString() + " = [10,13]" , function () {
        expect(testedInterval.intersection(interval2).toString()).toEqual("[10,13]");
    });

    var interval3 = new Interval(15,17);

    it("should intersection " + testedInterval.toString() + " and " + interval3.toString() + " = [15,27]" , function () {
        expect(testedInterval.intersection(interval3).toString()).toEqual("[15,17]");
    });    

    var interval4 = new Interval(8,22);

    it("should intersection " + testedInterval.toString() + " and " + interval4.toString() + " = [10,20]" , function () {
        expect(testedInterval.intersection(interval4).toString()).toEqual("[10,20]");
    });  

    var interval5 = new Interval(6,9);

    it("should intersection " + testedInterval.toString() + " and " + interval5.toString() + " is null" , function () {

        var value = testedInterval.intersection(interval5);
        expect(value).toBeNull();
    });  

    //Cas d'erreurs
    var intervalError = new Interval (20,10);
    it("should not intersection " + testedInterval.toString() + " and " + intervalError.toString(), function () {
        var result = function(){
            testedInterval.intersection(intervalError);
        }
        expect(result).toThrow("Unable to intersect when interval.end < interval.start");
    });

});

describe("Interval - Exclusion", function () {
    testedInterval = new Interval(10, 20);

    var interval1 = new Interval(15, 26);
    var interval2 = new Interval(10, 20);

    //Cas nominaux
    it("should exclusion " + testedInterval.toString() + " and " + interval1.toString() + " = [10,15]" , function () {
        expect(testedInterval.exclusion(interval1).toString()).toEqual("[10,15]");
    });

    it("should exclusion " + testedInterval.toString() + " and " + interval2.toString() + " is null" , function () {

        var value = testedInterval.exclusion(interval2);
        expect(value).toBeNull();
    });

    var interval3 = new Interval(15, 17);

    it("should exclusion " + testedInterval.toString() + " and " + interval2.toString() + " = [10,12] and [15,17]" , function () {

        var value = testedInterval.exclusion(interval3);
        expect(value[0].toString()).toEqual("[10,15]");
        expect(value[1].toString()).toEqual("[17,20]");
    });

    var interval4 = new Interval(22, 25);

    //Cas d'erreurs
    it("should not exclusion " + testedInterval.toString() + " and " + interval4.toString(), function () {
        var result4 = function(){
            testedInterval.exclusion(interval4);
        }
        expect(result4).toThrow("Unable to exclude intervals when there are no intersection");
    });

    var interval5 = new Interval(6, 9);

    it("should not exclusion " + testedInterval.toString() + " and " + interval5.toString(), function () {
        var result4 = function(){
            testedInterval.exclusion(interval5);
        }
        expect(result4).toThrow("Unable to exclude intervals when there are no intersection");
    });

    var intervalError = new Interval (20,10);
    it("should not exclusion " + testedInterval.toString() + " and " + intervalError.toString(), function () {
        var result = function(){
            testedInterval.exclusion(intervalError);
        }
        expect(result).toThrow("Unable to exclude when interval.end < interval.start");
    });


});

