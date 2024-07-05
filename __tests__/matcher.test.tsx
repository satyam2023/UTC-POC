import { testArray } from "../src/libs/const";
import { testError } from "../src/utils/helper";

test('Testing the Array', () => {
    expect(testArray).toContain('one');;
  });

  test('Check try catch throw error', () => {
    expect(() => testError()).toThrow();
  });

  test('null', () => {
    const n = undefined;
   expect(n).toBeUndefined();
  });


  test('Check the String matching', () => {
    expect('New').toMatch(/N/);
  });
