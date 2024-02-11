/*
 * This function partitions an array into two arrays, one with the items that
 * satisfy the predicate, and one with the items that don't.
 */
export function partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
    return arr.reduce(
        ([pass, fail], item) => {
            return predicate(item) ? [[...pass, item], fail] : [pass, [...fail, item]];
        },
        [[], []] as [T[], T[]]
    );
}
