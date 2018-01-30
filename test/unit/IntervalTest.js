describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

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
});

describe("Interval - including", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(15, 16),
        new Interval(10, 20),
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
});

describe("Interval - Union", function () {
    testedInterval = new Interval(10, 20);

    var interval1 = new Interval(15, 26);
    var interval2 = new Interval(8, 13);

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

});

describe("Interval - Intersection", function () {
    testedInterval = new Interval(10, 20);

    var interval1 = new Interval(15, 26);
    var interval2 = new Interval(8, 13);

    it("should union " + testedInterval.toString() + " and " + interval1.toString() + " = [15,20]" , function () {
        expect(testedInterval.intersection(interval1).toString()).toEqual("[15,20]");
    });

    it("should union " + testedInterval.toString() + " and " + interval2.toString() + " = [10,13]" , function () {
        expect(testedInterval.intersection(interval2).toString()).toEqual("[10,13]");
    });

    /*var interval3 = new Interval(15,17);

    it("should union " + testedInterval.toString() + " and " + interval3.toString() + " = [10,20]" , function () {
        expect(testedInterval.union(interval3).toString()).toEqual("[10,20]");
    });    

    var interval4 = new Interval(8, 9);
    var interval5 = new Interval(21, 22);

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
    });*/

});

