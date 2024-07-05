import { decidetype } from "../src/utils/helper";
import { testAsync } from "../src/utils/helper";

test('type and return value ', () => {
    expect(decidetype('one')).toBe(1);
    expect(decidetype('two')).toBe(2);
    expect(decidetype("ji")).toBe(3);
  });

  test('Testing Async Function', async() => {
    const data=await testAsync();
    expect(data).toBeUndefined();
  });
  

  test('Add Two Number', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });



