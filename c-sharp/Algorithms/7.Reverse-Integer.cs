// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// 
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// 
//  
// 
// Example 1:
// 
// Input: x = 123
// Output: 321
// Example 2:
// 
// Input: x = -123
// Output: -321
// Example 3:
// 
// Input: x = 120
// Output: 21
//  
// 
// Constraints:
// 
// -231 <= x <= 231 - 1


public class Solution7
{
    public int Reverse(int x)
    {
        int result = 0;
        int sign = x < 0 ? -1 : 1;
        long xAbs = x;
        if (xAbs < 0) xAbs = -xAbs;

        while (xAbs > 0)
        {
            int digit = (int)(xAbs % 10);
            xAbs /= 10;
            if (result > (int.MaxValue - digit) / 10)
                return 0;
            result = (result * 10) + digit;
        }

        return result * sign;
    }
}

// public class Solution7
// {
//     public int Reverse(int x)
//     {
//         int result = 0;
//         int sign = x < 0 ? -1 : 1;
//         x = Math.Abs(x);
// 
//         while (x > 0)
//         {
//             Console.WriteLine();
//             Console.WriteLine($"x {x}");
//             int digit = x % 10;
//             Console.WriteLine($"digit {digit}");
//             x /= 10;
//             Console.WriteLine($"x {x}");
// 
//             if (result > (int.MaxValue - digit) / 10)
//                 return 0;
// 
//             result = result * 10 + digit;
//             Console.WriteLine($"result {result}");
//         }
// 
//         return sign * result;
//     }
// }


var solution7 = new Solution7();

// var x_01 = 123;
// var output_01 = 321;
// var res_01 = solution7.Reverse(x_01);
// Console.WriteLine($"Input: {x_01}, Expected: {output_01}, Got: {res_01}");
// 
// 
// var x_02 = -123;
// var output_02 = -321;
// var res_02 = solution7.Reverse(x_02);
// Console.WriteLine($"Input: {x_02}, Expected: {output_02}, Got: {res_02}");

var x_03 = -2147483648;
var output_03 = 0;
var res_03 = solution7.Reverse(x_03);
Console.WriteLine($"Input: {x_03}, Expected: {output_03}, Got: {res_03}");
