//Quentin Molinié - FIPA 3
//Interval - Complétion
//30/01/2018


Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {

	if(interval.end < interval.start)
		throw 'Unable to overlap when interval.end < interval.start'

    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {

	if(interval.end < interval.start)
		throw 'Unable to include when interval.end < interval.start'

    return this.end >= interval.end && this.start <= interval.start;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {

	if(interval.end < interval.start)
		throw 'Unable to union when interval.end < interval.start'

	if(this.start <=interval.start && this.end >= interval.end)
		return new Interval(this.start,this.end);

	if(this.start <= interval.start){

		if(this.end < interval.start){
			throw 'Both intervals cannot be union together'
		}
		else{
			return new Interval(this.start,interval.end);
		}
	}
	else{
		if(interval.end < this.start){
			throw 'Both intervals cannot be union together'
		}
		else{
			return new Interval(interval.start,this.end);
		}
	}
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {


	if(interval.end < interval.start)
		throw 'Unable to intersect when interval.end < interval.start'


	if((this.end<interval.start)||(interval.end<this.start))
		return null;

	if(this.start <=interval.start && this.end >= interval.end)
		return new Interval(interval.start,interval.end);

	if(interval.start <=this.start && interval.end >= this.end)
		return new Interval(this.start,this.end);


	if(this.start < interval.start){

		if(this.end >= interval.start && this.end <= interval.end){
			return new Interval(interval.start,this.end);
		}
	}
	else{
		if(interval.end > this.start && interval.end <= this.end){
			return new Interval(this.start,interval.end);
		}

	}

};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {

	if(interval.end < interval.start)
		throw 'Unable to exclude when interval.end < interval.start'

	if(this.start == interval.start && interval.end == this.end)
		return null;

	if(this.start < interval.start && this.end > interval.end){
		var tab = [new Interval(this.start,interval.start),new Interval(interval.end,this.end)]
		return tab;
	}

	if(this.start <= interval.start && interval.start < this.end)
		return new Interval(this.start,interval.start);

	if((this.end<interval.start)||interval.end<this.start)
		throw 'Unable to exclude intervals when there are no intersection';


};



