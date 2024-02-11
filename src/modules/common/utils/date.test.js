import { getApropriateDate, getMealByTime } from "./date";

describe("getApropriateDate", () => {
    test("should return tomorrow date if dinner time has past", () => {
        const date = new Date();
        date.setUTCHours(22, 30, 1); //one second past end dinner time

        const expectedDate = new Date();
        expectedDate.setUTCDate(date.getDate() + 1);

        const returnedDate = getApropriateDate(date);

        expect(returnedDate).toBe(expectedDate.toISOString().slice(0, 10));
    });
    test("should return today's date if the dinner time has not past", () => {
        const date = new Date();
        date.setUTCHours(22, 29, 59); //one second before end dinner time

        const expectedDate = new Date();

        const returnedDate = getApropriateDate(date);

        expect(returnedDate).toBe(expectedDate.toISOString().slice(0, 10));
    });
});

describe("getMealByTime", () => {
    test('should return "Desjejum" before 9:30am', () => {
        const date = new Date();
        date.setHours(9, 29, 59);

        expect(getMealByTime(date)).toBe("Desjejum");
    });

    test('should return "Desjejum" after 19:30pm', () => {
        const date = new Date();
        date.setHours(19, 30, 1);

        expect(getMealByTime(date)).toBe("Desjejum");
    });

    test('should return "Almoço" after 9:30am', () => {
        const date = new Date();
        date.setHours(9, 30, 1);

        expect(getMealByTime(date)).toBe("Almoço");
    });

    test('should return "Almoço" before 14:30pm', () => {
        const date = new Date();
        date.setHours(14, 29, 59);

        expect(getMealByTime(date)).toBe("Almoço");
    });

    test('should return "Jantar" after 14:30am', () => {
        const date = new Date();
        date.setHours(14, 30, 1);

        expect(getMealByTime(date)).toBe("Jantar");
    });

    test('should return "Jantar" before 19:30pm', () => {
        const date = new Date();
        date.setHours(19, 29, 59);

        expect(getMealByTime(date)).toBe("Jantar");
    });
});
