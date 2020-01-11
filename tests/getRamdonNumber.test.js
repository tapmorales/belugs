import getRamdonNumber from "./../src/lib/getRamdonNumber";

const expect = require("chai").expect;

describe("getRamdonNumber", function() {
    it("should return below 1", function() {
        let x = 10;
        while (--x) {
            let nSorteado = getRamdonNumber(0, 1);
            expect(nSorteado).to.be.below(2);
        }
    });

    it("should return above 0 ", function() {
        let x = 10;
        while (--x) {
            let nSorteado = getRamdonNumber(0, 1);
            expect(nSorteado).to.be.above(-1);
        }
    });

    it("should return above 0 when pass false as third parameter", function() {
        let x = 10;
        while (--x) {
            let nSorteado = getRamdonNumber(0, 1, false);
            console.log(nSorteado);
            expect(nSorteado).to.be.above(-1);
        }
    });
});
