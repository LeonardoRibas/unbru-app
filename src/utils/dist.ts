/* calculate levenstein distance between two strings */
export function lev(s: string, t: string): number {
    const d: number[][] = [];
    const n = s.length;
    const m = t.length;
    if (n === 0) return m;
    if (m === 0) return n;

    for (let i = n; i >= 0; i--) d[i] = [];
    for (let i = n; i >= 0; i--) d[i][0] = i;
    for (let j = m; j >= 0; j--) d[0][j] = j;

    for (let i = 1; i <= n; i++) {
        const s_i = s.charAt(i - 1);

        for (let j = 1; j <= m; j++) {
            const t_j = t.charAt(j - 1);
            const cost = s_i === t_j ? 0 : 1;
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
    }
    return d[n][m];
}

/* get the closest string from a list of strings */
export function closest(str: string, list: string[]): string {
    let min = Infinity;
    let [closest] = list;
    list.forEach((item) => {
        const distance = lev(str, item);
        if (distance < min) {
            min = distance;
            closest = item;
        }
    });
    return closest;
}

/* cluster based on levenstein distance */
