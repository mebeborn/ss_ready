const funcs = require("../funcs.js");
const {perfectInt, howMuch, howMuchSum } = funcs;


describe("Perfect Test",()=>{
    it("checks out if int perfect", ()=>{
        expect(perfectInt(6)).toBe(true);
    });
});

describe("How Test",()=>{
    it("check out length of int", ()=>{
        expect(howMuch(111)).toEqual(3);
    });
});

describe("HowMuchSum Test",()=>{
    it("check out sum of int's", ()=>{
        expect(howMuchSum(122)).toEqual(5);
    });
});

