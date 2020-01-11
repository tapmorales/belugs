import { getMedia } from "./../src/";

const expect = require("chai").expect;

describe("getMedia", function() {
    it("should return 2.00", function() {
        expect(getMedia(2, 2)).to.be.equal(2);
    });

    it("should return 0.00 when pass strings", function() {
        expect(getMedia("2", "2")).to.be.equal(0);
    });

    it("should return 0.00 when pass 0", function() {
        expect(getMedia(0)).to.be.equal(0);
    });

    it("should return 2.00 when pass 2", function() {
        expect(getMedia(2)).to.be.equal(2);
    });

    it("should return 2.50 when pass 2, 3", function() {
        expect(getMedia(2, 3)).to.be.equal(2.5);
    });

    it("should return 2.50 when pass 2.5, 2.5", function() {
        expect(getMedia(2.5, 2.5)).to.be.equal(2.5);
    });

    it("should return 2.50 when pass 2.5, '2.5', 2.5", function() {
        expect(getMedia(2.5, "2.5", 2.5)).to.be.equal(2.5);
    });

    it("should return 0.00 when pass no parameter", function() {
        expect(getMedia()).to.be.equal(0);
    });
});
