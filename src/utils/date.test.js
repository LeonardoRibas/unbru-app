import { getApropriateDate, getMealByTime } from "./date";

test("get tomorrow date when dinner has past", () => {
    date = new Date(2022, 9, 5, 19, 1, 0, 0);
    expect(getApropriateDate(date)).toBe("2022-10-06");
});

test("get todays date if the dinner time has not ended", () => {
    date = new Date(2022, 9, 5, 18, 59, 0, 0);
    expect(getApropriateDate(date)).toBe("2022-10-05");
});

test('returns "Desjejum" before 9am', () => {
    date = new Date(2022, 9, 5, 9, 0, 0, 0);
    expect(getMealByTime(date)).toBe("Desjejum");
});

test('returns "Desjejum" after 19pm and after 19pm', () => {
    date = new Date(2022, 9, 5, 20, 0, 0, 0);
    expect(getMealByTime(date)).toBe("Desjejum");
});

test('returns "Almoço" after 9am', () => {
    date = new Date(2022, 9, 5, 10, 0, 0, 0);
    expect(getMealByTime(date)).toBe("Almoço");
});

test('returns "Almoço" before 14pm', () => {
    date = new Date(2022, 9, 5, 14, 0, 0, 0);
    expect(getMealByTime(date)).toBe("Almoço");
});

test('returns "Jantar" after 14am', () => {
    date = new Date(2022, 9, 5, 15, 0, 0, 0);
    expect(getMealByTime(date)).toBe("Jantar");
});

test('returns "Jantar" before 19pm', () => {
    date = new Date(2022, 9, 5, 19, 0, 0, 0);
    expect(getMealByTime(date)).toBe("Jantar");
});
