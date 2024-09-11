function racePromises(promises) {
    return Promise.race(promises);
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 500));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("Promise 3 rejected"), 200));

racePromises([promise1, promise2, promise3])
    .then((result) => {
        console.log("First resolved/rejected result:", result); // Output: "Promise 3 rejected" (since it rejects first)
    })
    .catch((error) => {
        console.error("Error:", error); // Catches the first rejection
    });
