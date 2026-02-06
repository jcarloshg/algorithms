# You’re a truck driver starting at the warehouse located at point (0, 0).
# You’re given a list of delivery destinations, where each destination is represented by its (x, y) coordinates.
# Your goal is to find the closest X destinations to the warehouse.
#
#
# Input
# allLocations: a list of coordinates, where each coordinate is [x, y]
# numDeliveries: the number of closest destinations you need to pick
#
#
# Output
# Return a list containing the numDeliveries closest coordinates.
# If two destinations are the same distance away, choose the one with the smaller x-coordinate first.
# If there are no locations, return a list containing one empty list ([[]]).
#
#
#
# Example
# Input:
# allLocations = [[1, 2], [3, 4], [1, -1]]
# numDeliveries = 2
#
# Step-by-step:
# Distance to [1, 2] = √(1² + 2²) = 2.236
# Distance to [3, 4] = √(3² + 4²) = 5.0
# Distance to [1, -1] = √(1² + (-1)²) = 1.414
# The two closest are [1, -1] and [1, 2].
# Output:
# [[1, -1], [1, 2]]
#

import math


def manage_deliveries(points: list, numDeliveries: int) -> list:
    if not points:
        return [[]]

    deliveries_with_distances = []

    for index in range(len(points)):
        p = points[index]
        values_x = p[0] * p[0]  # x²
        values_y = p[1] * p[1]  # y²
        distance = math.sqrt(values_x + values_y)
        deliveries_with_distances.append((distance, p[0], p))

    # Sort by distance first, then by x-coordinate as tiebreaker
    deliveries_with_distances.sort(key=lambda x: (x[0], x[1]))

    # Return only the first numDeliveries closest points
    return [item[2] for item in deliveries_with_distances[:numDeliveries]]


input_01 = [[1, 2], [3, 4], [1, -1]]
print(f"manage_deliveries(input_01, 2) {manage_deliveries(input_01, 2)}")
