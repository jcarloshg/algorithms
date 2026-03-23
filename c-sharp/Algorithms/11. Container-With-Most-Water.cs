// 11. Container With Most Water
// 
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// 
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// 
// Return the maximum amount of water a container can store.
// 
// Notice that you may not slant the container.


public class Solution11
{
    public int MaxArea(int[] height)
    {
        int amount = 0, leftIndex = 0, rightIndex = height.Length - 1;

        while (leftIndex != rightIndex)
        {

            // aux
            // Console.WriteLine($"\n leftIndex: {leftIndex}, rightIndex {rightIndex}, left {height[leftIndex]}, right {height[rightIndex]}");

            // Y
            int minHeight = Math.Min(height[leftIndex], height[rightIndex]);
            // Console.WriteLine($"minHeight {minHeight}");
            // X
            int distance = rightIndex - leftIndex;
            // Console.WriteLine($"distance {distance}");

            // area
            int currentAmount = minHeight * distance;
            // Console.WriteLine($"currentAmount {currentAmount}");

            // update amount
            if (currentAmount > amount)
                amount = currentAmount;

            if (height[leftIndex] > height[rightIndex])
                rightIndex--;
            else
                leftIndex++;

        }

        return amount;
    }
}