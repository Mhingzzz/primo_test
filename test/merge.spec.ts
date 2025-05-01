import { merge, merge_aux } from "../src/merge";

// jest.mock("../src/merge");
it("merge empty arrays", () => {
	const collectoin_1: number[] = [];
	const collectoin_2: number[] = [];
	const collectoin_3: number[] = [];
	const expected: number[] = [];
	const result = merge(collectoin_1, collectoin_2, collectoin_3);
	expect(result).toEqual(expected);

	const collectoin_1_2: number[] = [1];
	const collectoin_2_2: number[] = [];
	const collectoin_3_2: number[] = [];
	const expected_2: number[] = [1];
	const result_2 = merge(collectoin_1_2, collectoin_2_2, collectoin_3_2);
	expect(result_2).toEqual(expected_2);
});

it("should merge three sorted arrays", () => {
	const collectoin_1 = [1, 3, 5, 7, 9];
	const collectoin_2 = [10, 8, 6, 4, 2];
	const collectoin_3 = [11, 13, 15, 17, 19];
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19];
	const result = merge(collectoin_1, collectoin_2, collectoin_3);
	expect(result).toEqual(expected);
});

it("should merge two sorted arrays (merge_aux)", () => {
	const collectoin_1 = [1, 3, 5, 7, 9];
	const collectoin_2 = [11, 13, 15, 17, 19];
	const expected = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
	const result = merge_aux(collectoin_1, collectoin_2);
	expect(result).toEqual(expected);
});
