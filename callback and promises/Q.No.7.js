async function fetchMultipleData(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch from ${url}. Status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
        }));

        const results = await Promise.all(fetchPromises); // Fetch all URLs concurrently
        return results; // Return array of responses
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw error for further handling
    }
}

// Example usage:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleData(urls)
    .then((data) => {
        console.log("Fetched data:", data); // Output array of fetched data
    })
    .catch((error) => {
        console.error("Fetch error:", error); // Handle errors if any
    });
