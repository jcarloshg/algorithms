// 5. Longest Palindromic Substring
// Attempted
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the longest palindromic substring in s.
// 
//  
// 
// Example 1:
// 
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// 
// Input: s = "cbbd"
// Output: "bb"
//  
// 
// Constraints:
// 
// 1 <= s.length <= 1000
// s consist of only digits and English letters.


public class Solution5
{
    public string LongestPalindrome(string s)
    {

        int sLength = s.Length;
        if (s.Length <= 1) return s;
        if (s.Length == null) return s;

        int start = 0, maxLength = 1;

        for (int i = 0; i < sLength; i++)
        {
            Console.WriteLine("\n==========");
            int lent1 = GetLength(s, i, i);
            Console.WriteLine(lent1);

            if (lent1 > maxLength)
            {
                start = i - (lent1 - 1) / 2;
                maxLength = lent1;
            }

        }

        return s.Substring(start, maxLength);
    }

    private int GetLength(string s, int left, int right)
    {
        while (left >= 0 && right <= s.Length & s[left] == s[right])
        {
            Console.WriteLine($"s[left]: {s[left]}");
            Console.WriteLine($"s[right]: {s[right]}");

            left--;
            right++;
        }

        Console.WriteLine($"left: {left}, right: {right}, value: {right - left - 1}");
        return right - left - 1;
    }
}

// public class Solution
// {
//     public string LongestPalindrome(string s)
//     {
//         if (s == null || s.Length < 2) return s;
// 
//         int start = 0, maxLen = 1;
// 
//         for (int i = 0; i < s.Length; i++)
//         {
//             int len1 = ExpandAroundCenter(s, i, i);
//             int len2 = ExpandAroundCenter(s, i, i + 1);
//             int len = Math.Max(len1, len2);
// 
//             if (len > maxLen)
//             {
//                 start = i - (len - 1) / 2;
//                 maxLen = len;
//             }
//         }
// 
//         return s.Substring(start, maxLen);
//     }
// 
//     private int ExpandAroundCenter(string s, int left, int right)
//     {
//         while (left >= 0 && right < s.Length && s[left] == s[right])
//         {
//             left--;
//             right++;
//         }
//         return right - left - 1;
//     }
// }



var solution5 = new Solution5();

var input01 = "babad";
Console.WriteLine(input01);
var output01 = solution5.LongestPalindrome(input01);
Console.WriteLine(output01);

var input02 = "cbbd";
Console.WriteLine(input02);
var output02 = solution5.LongestPalindrome(input02);
Console.WriteLine(output02);