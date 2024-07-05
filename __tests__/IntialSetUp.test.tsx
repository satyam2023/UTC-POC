import { intialSetUp, testIntialSetUp, testIntialSetting } from "../src/utils/helper";

beforeAll(()=>{intialSetUp();
});

beforeEach(()=>intialSetUp())



test("Implementing BeforeEach hook",()=>{
    expect(testIntialSetUp()).toBe(100);
})


test("Implemnting for Difference between beforeEach and beforeAll",()=>{
    expect(testIntialSetting()).toBe(200);
})


describe("testing",()=>console.log("Executed before all the thing in test file"))

