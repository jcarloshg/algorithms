// 2653. Sliding Subarray Beauty

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.CompilerServices;

class Solution
{
    static void Main(string[] args)
    {
        var solution = new Solution();

        var nums1 = new int[] { 1, -1, -3, -2, 3 };
        var result1 = solution.GetSubarrayBeauty(nums1, 3, 2);
        Console.WriteLine(string.Join(",", result1));

        var nums2 = new int[] { -1, -2, -3, -4, -5 };
        var result2 = solution.GetSubarrayBeauty(nums2, 2, 2);
        Console.WriteLine(string.Join(",", result2));

        var nums3 = new int[] { -3, 1, 2, -3, 0, -3 };
        var result3 = solution.GetSubarrayBeauty(nums3, 2, 1);
        Console.WriteLine(string.Join(",", result3));
    }

    public int[] GetSubarrayBeauty(int[] nums, int k, int x)
    {
        int n = nums.Length;
        int[] result = new int[n - k + 1];

        int[] freq = new int[100];

        for (int i = 0; i < k; i++)
        {
            int idx = nums[i] + 50;
            Console.WriteLine($"{i} | {idx}");
            if (nums[i] < 0)
                freq[idx]++;
        }

        Console.WriteLine("=======");
        Console.Write(string.Join(",", freq));
        result[0] = GetBeauty(freq, x);

        for (int i = k; i < n; i++)
        {
            int outIdx = nums[i - k] + 50;
            if (nums[i - k] < 0)
                freq[outIdx]--;

            int inIdx = nums[i] + 50;
            if (nums[i] < 0)
                freq[inIdx]++;

            result[i - k + 1] = GetBeauty(freq, x);
        }

        return result;
    }

    // Finds the x-th smallest negative number in the frequency array
    // freq array indices: 0 = -50, 1 = -49, ..., 49 = -1
    // Iterates from most negative to least negative, accumulating count
    // Returns the x-th negative number, or 0 if fewer than x negatives exist
    private int GetBeauty(int[] freq, int x)
    {
        int count = 0;
        for (int i = 0; i < 50; i++)  // Only check negative numbers (-50 to -1)
        {
            count += freq[i];          // Add frequency of current negative number
            if (count >= x)            // When we've seen x negatives, return this one
                return i - 50;         // Convert index back to actual negative value
        }
        return 0;  // Less than x negative numbers in window
    }

}
