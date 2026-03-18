// 2956. Find Common Elements Between Two Arrays

using System;

class Solution3
{
    static void Main(string[] args)
    {
        var solution = new Solution3();

        var nums1 = new int[] { 1, 2, 3, 4, 5 };
        var nums2 = new int[] { 2, 3, 4, 5, 6 };
        var result1 = solution.FindCommonElements(nums1, nums2);
        Console.WriteLine(string.Join(",", result1));

        var nums3 = new int[] { 1, 2, 3 };
        var nums4 = new int[] { 4, 5, 6 };
        var result2 = solution.FindCommonElements(nums3, nums4);
        Console.WriteLine(string.Join(",", result2));

        var nums5 = new int[] { 1, 1, 1, 1 };
        var nums6 = new int[] { 1, 1 };
        var result3 = solution.FindCommonElements(nums5, nums6);
        Console.WriteLine(string.Join(",", result3));
    }

    public int[] FindCommonElements(int[] nums1, int[] nums2)
    {
        int[] freq1 = new int[101];
        int[] freq2 = new int[101];

        foreach (int num in nums1)
            freq1[num]++;

        foreach (int num in nums2)
            freq2[num]++;

        List<int> result = new List<int>();
        for (int i = 1; i <= 100; i++)
        {
            if (freq1[i] > 0 && freq2[i] > 0)
                result.Add(i);
        }

        return result.ToArray();
    }
}
