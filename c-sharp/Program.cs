using System;
using System.Linq;

var solution15 = new Solution15();

var nums1 = new int[] { -1, 0, 1, 2, -1, -4 };
Console.WriteLine(string.Join(", ", solution15.ThreeSum(nums1).Select(t => $"[{string.Join(",", t)}]")));

var nums2 = new int[] { 0, 1, 1 };
Console.WriteLine(string.Join(", ", solution15.ThreeSum(nums2).Select(t => $"[{string.Join(",", t)}]")));

var nums3 = new int[] { 0, 0, 0 };
Console.WriteLine(string.Join(", ", solution15.ThreeSum(nums3).Select(t => $"[{string.Join(",", t)}]")));
// 
// var nums1 = new int[] { 1, 2, 3, 4, 5 };
// var nums2 = new int[] { 2, 3, 4, 5, 6 };
// Console.WriteLine(string.Join(",", solution.FindCommonElements(nums1, nums2)));
// 
// var nums3 = new int[] { 1, 2, 3 };
// var nums4 = new int[] { 4, 5, 6 };
// Console.WriteLine(string.Join(",", solution.FindCommonElements(nums3, nums4)));
// 
// var nums5 = new int[] { 1, 1, 1, 1 };
// var nums6 = new int[] { 1, 1 };
// Console.WriteLine(string.Join(",", solution.FindCommonElements(nums5, nums6)));


// var solution5 = new Solution5();
// 
// var input01 = "babad";
// var output01 = solution5.LongestPalindrome(input01);
// Console.WriteLine(input01);
// Console.WriteLine(output01);
// 
// var input02 = "cbbd";
// var output02 = solution5.LongestPalindrome(input02);
// Console.WriteLine(input02);
// Console.WriteLine(output02);
