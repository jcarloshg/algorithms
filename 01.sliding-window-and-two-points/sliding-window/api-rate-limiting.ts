// api-rate-limiting.ts

// **A. API Rate Limiting (The "Fixed" or "Sliding" Window Counter)**
// 
// - **The Problem:** You must block a user if they exceed 100 requests per minute.
// - **The Naive Solution ():** Store every timestamp of every request in a database.
//          On every new request, query the DB to count rows where 
//          `timestamp > now - 60s`. This kills the database.
// - **The Sliding Window Solution ():** We maintain a counter or a lightweight 
//          queue of timestamps in Redis. As time progresses, we "slide" the
//          window, expiring counts older than 60 seconds (using Redis TTL or
//          sorted sets) and incrementing the current counter. This makes the 
//          check constant time, protecting the system from DDoS attacks.

// Sliding Window Pattern Example (TypeScript)

/**
 * Returns the maximum number of requests in any sliding window of the given size.
 *
 * @param requests Timestamps (in seconds) of user requests, sorted in ascending order
 * @param windowSize The width (in seconds) of the sliding window
 * @returns The maximum number of requests within any window of size windowSize
 */
function maxRequestsInWindow(requests: number[], windowSize: number): number {
    let maxRequests = 0;
    let left = 0;

    for (let right = 0; right < requests.length; right++) {

        // console.log(`slide: ${requests.slice(left, right + 1)}`);
        // console.log(`left, right: ${left}, ${right}, ${requests[right]}, ${requests[left]}`);
        // console.log(`left - right -> ${requests[right] - requests[left]}`);


        // Shrink window if outside windowSize
        while (requests[right] - requests[left] >= windowSize) {
            left++;
        }
        // Update max window size
        maxRequests = Math.max(maxRequests, right - left + 1);
    }

    return maxRequests;
}

// Example usage:
const requests = [1, 3, 37, 40, 41, 61, 62, 99, 100];
const windowSize = 60;
console.log(maxRequestsInWindow(requests, windowSize)); // Output: 4
// ---


