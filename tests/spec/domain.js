describe('Robots', function() {

    it('Effective power of should be 1', function () {
        var aRobot = new Robot('robots name.', 1, 0);
        expect(aRobot.effectivePower()).toBe(1);
    });

    it('Price should be 0', function () {
        var aRobot = new Robot('robots name.', 0, 0);
        expect(aRobot.price()).toBe(0);
    });

});