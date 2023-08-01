import { assert, expect } from "chai";
import { sayGoodbye } from "../main";


describe("hello tests", () => {
    it("should print hi", () => {
       expect(sayGoodbye()).to.equal(2);
    })
});