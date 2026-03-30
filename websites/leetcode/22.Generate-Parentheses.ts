// 22. Generate Parentheses
// Medium
// Topics
// premium lock icon
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
//
//
// Example 1:
//
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
//
// Input: n = 1
// Output: ["()"]
//
//
// Constraints:
//
// 1 <= n <= 8

function generateParenthesis(n: number): string[] {
    const combinations: string[] = [];
    const dfs = (id: number, open: number, close: number, parentesis: string) => {

        if (open == n && close == n) {
            combinations.push(parentesis);
            return;
        }

        if (open < n) dfs(id + 1, open + 1, close, parentesis + "(");
        if (open > close) dfs(id + 1, open, close + 1, parentesis + ")");
    };

    dfs(0, 0, 0, "");

    return combinations;
}

const generateParenthesisTest = [{ in: 1 }, { in: 2 }, { in: 3 }];

const res = generateParenthesis(3);
console.log(`res: `, res);
