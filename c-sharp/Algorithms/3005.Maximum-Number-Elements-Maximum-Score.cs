// 3005. Maximum Number of Elements With Maximum Score

using System;

class Solution2
{
    static void Main(string[] args)
    {
        var solution = new Solution2();

        var nums1 = new int[] { 1, 2, 2, 1, 1, 2 };
        Console.WriteLine(solution.MaximumNumberOfElements(nums1));

        var nums2 = new int[] { 4, 4, 4, 4 };
        Console.WriteLine(solution.MaximumNumberOfElements(nums2));

        var nums3 = new int[] { 1, 1, 1, 1 };
        Console.WriteLine(solution.MaximumNumberOfElements(nums3));
    }

    public int MaximumNumberOfElements(int[] nums)
    {
        int n = nums.Length;
        int[] freq = new int[n + 1];

        for (int i = 0; i < n; i++)
        {
            freq[nums[i]]++;
        }

        int maxScore = 0;
        for (int i = 0; i <= n; i++)
        {
            if (freq[i] > 0)
                maxScore = Math.Max(maxScore, i);
        }

        int count = 0;
        for (int i = 0; i <= n; i++)
        {
            if (freq[i] == maxScore)
                count += freq[i];
        }

        return count;
    }
}
