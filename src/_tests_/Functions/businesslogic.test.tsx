import {rollD10, rollForTwoNumbers} from "../../Functions/businesslogic";

describe("Businness Logic Functions", () => {
    test("RollD10 should return a number from 1-10", () => {
        const result: number = rollD10();
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
    })

})