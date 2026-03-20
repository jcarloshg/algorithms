using System.Collections.Generic;

public class User
{
    public string Name { get; set; }
    public int Age { get; set; }
}

public class Proof
{
    public void byArray()
    {
        string[] fruits = { "Banana", "Apple", "Strawberry", "Kiwi", "Orange", "Grape", "Mango", "Pineapple", "Watermelon", "Peach" };

        string[] alpha = fruits.OrderBy(f => f.Length).ToArray();

        Console.WriteLine("arrays");
        Console.WriteLine($"original {string.Join(",", fruits)}");
        Console.WriteLine($"by length {string.Join(",", alpha)}");

    }


    public void byList()
    {
        List<int> numbers = new List<int> { 5, 1, 9, 3, 3, 5, 9, 1, 5, 3 };
        Console.WriteLine($"original {string.Join(",", numbers)}");
        numbers.Sort((a, b) => a.CompareTo(b));
    }

    public void byUsers()
    {
        List<User> users = new List<User>
        {
            new User { Name = "Eve", Age = 35 },
            new User { Name = "Alice", Age = 25 },
            new User { Name = "Diana", Age = 28 },
            new User { Name = "Charlie", Age = 22 },
            new User { Name = "Bob", Age = 30 },
        };



        Console.WriteLine("Sort");
        users.Sort((a, b) => a.Age.CompareTo(b.Age));
        foreach (var user in users)
        {
            Console.WriteLine($"{user.Name}, {user.Age}");
        }


        Console.WriteLine("order by");
        users.OrderByDescending(u => u.Age);
        foreach (var user in users)
        {
            Console.WriteLine($"{user.Name}, {user.Age}");
        }
    }

}


var proof = new Proof();

Console.WriteLine();
proof.byArray();

Console.WriteLine();
proof.byList();

Console.WriteLine();
proof.byUsers();