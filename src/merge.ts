/**
 * Merges two sorted arrays into a single sorted array in ascending order.
 * @param collectoin_1 - An array sorted in ascending order (min to max).
 * @param collectoin_2 - An array sorted in descending order (max to min).
 * @returns A single array containing all elements from the input arrays, sorted in ascending order.
 */
export function merge_aux(
	collectoin_1: number[],
	collectoin_2: number[]
): number[] {
	let merged: number[] = [];
	let i = 0;
	let j = 0;

	while (i < collectoin_1.length && j < collectoin_2.length) {
		if (collectoin_1[i] < collectoin_2[j]) {
			merged.push(collectoin_1[i]);
			i++;
		} else {
			merged.push(collectoin_2[j]);
			j++;
		}
	}

	while (i < collectoin_1.length) {
		merged.push(collectoin_1[i]);
		i++;
	}

	while (j < collectoin_2.length) {
		merged.push(collectoin_2[j]);
		j++;
	}

	return merged;
}
/**
 * Merges three sorted arrays into a single sorted array in ascending order.
 *
 * @param collectoin_1 - An array sorted in ascending order (min to max).
 * @param collectoin_2 - An array sorted in descending order (max to min).
 * @param collectoin_3 - An array sorted in ascending order (min to max).
 * @returns A single array containing all elements from the input arrays, sorted in ascending order.
 */
export function merge(
	collectoin_1: number[],
	collectoin_2: number[],
	collectoin_3: number[]
) {
	return merge_aux(
		merge_aux(collectoin_1, collectoin_3),
		collectoin_2.reverse()
	);
}
