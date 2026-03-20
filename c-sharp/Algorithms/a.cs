// 15. 3Sum
using System.Collections;
using System.Linq;

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// 
// Notice that the solution set must not contain duplicate triplets.
// 
//  
// 
// Example 1:
// 
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:
// 
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
// 
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
//  
// 
// Constraints:
// 
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

var solution15 = new Solution15();

Console.WriteLine("=== 3Sum Tests ===");

var input01 = new int[] { -1, 0, 1, 2, -1, -4 };
var ouput01 = solution15.ThreeSum(input01);
Console.WriteLine($"Input: {string.Join(",", input01)}");
Console.WriteLine($"Output: [{string.Join(", ", ouput01.Select(t => $"[{string.Join(",", t)}]"))}]");
Console.WriteLine($"Expected: [-1,-1,2], [-1,0,1]");
Console.WriteLine();

// var test2 = solution15.ThreeSum(new int[] { 0, 1, 1 });
// Console.WriteLine($"Input: [0,1,1]");
// Console.WriteLine($"Output: [{string.Join(", ", test2.Select(t => $"[{string.Join(",", t)}]"))}]");
// Console.WriteLine($"Expected: []");
// Console.WriteLine();
// 
// var test3 = solution15.ThreeSum(new int[] { 0, 0, 0 });
// Console.WriteLine($"Input: [0,0,0]");
// Console.WriteLine($"Output: [{string.Join(", ", test3.Select(t => $"[{string.Join(",", t)}]"))}]");
// Console.WriteLine($"Expected: [0,0,0]");
// Console.WriteLine();
// 
// var test4 = solution15.ThreeSum(new int[] { -2, 0, 1, 1, 2 });
// Console.WriteLine($"Input: [-2,0,1,1,2]");
// Console.WriteLine($"Output: [{string.Join(", ", test4.Select(t => $"[{string.Join(",", t)}]"))}]");
// Console.WriteLine($"Expected: [-2,0,2], [-2,1,1]");
// Console.WriteLine();
// 
// var test5 = solution15.ThreeSum(new int[] { -1, 0, 1, 2, -1, -4, -2, -3, 3 });
// Console.WriteLine($"Input: [-1,0,1,2,-1,-4,-2,-3,3]");
// Console.WriteLine($"Output: [{string.Join(", ", test5.Select(t => $"[{string.Join(",", t)}]"))}]");

public class Solution15
{
    public IList<IList<int>> ThreeSum(int[] nums)
    {

        Array.Sort(nums);
        IList<IList<int>> list = [];

        Console.WriteLine(string.Join(",", nums));

        for (int i = 0; i < nums.Length - 2; i++)
        {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1, right = nums.Length - 1;

            while (left < right)
            {
                int currentTotal = nums[i] + nums[left] + nums[right];

                Console.WriteLine();
                Console.WriteLine($"i: {i}, leftIndex: {left}, rightIndex:{right}");
                Console.WriteLine($"i: {nums[i]}, left: {nums[left]}, right:{nums[right]}");
                Console.WriteLine($"currentTotal {currentTotal}");

                if (currentTotal == 0)
                {
                    list.Add(new List<int> { nums[i], nums[left], nums[right] });
                    Console.WriteLine(list);
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                }
                else if (currentTotal < 0)
                {
                    left++;
                }
                else
                {
                    right--;
                }
            }
        }

        return list;

    }
}

// public class Solution15
// {
//     public IList<IList<int>> ThreeSum(int[] nums)
//     {
//         var result = new List<IList<int>>();
//         Array.Sort(nums);
// 
//         for (int i = 0; i < nums.Length - 2; i++)
//         {
//             if (i > 0 && nums[i] == nums[i - 1]) continue;
// 
//             int left = i + 1, right = nums.Length - 1;
//             while (left < right)
//             {
//                 int sum = nums[i] + nums[left] + nums[right];
//                 if (sum == 0)
//                 {
//                     result.Add(new List<int> { nums[i], nums[left], nums[right] });
//                     while (left < right && nums[left] == nums[left + 1]) left++;
//                     while (left < right && nums[right] == nums[right - 1]) right--;
//                     left++;
//                     right--;
//                 }
//                 else if (sum < 0)
//                 {
//                     left++;
//                 }
//                 else
//                 {
//                     right--;
//                 }
//             }
//         }
// 
//         return result;
//     }
// }