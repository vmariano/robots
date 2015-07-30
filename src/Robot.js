function Robot(theName, thePower, theDeterioration) {

    var name =  theName || '';
    var power = thePower || 0;
    var deterioration =  theDeterioration || 0;

    this.effectivePower = function () {
        return power * (100 - deterioration) / 100
    };

    this.price = function () {
        return this.effectivePower() * 50;
    };
}