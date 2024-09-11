async function fetchData(url) {
    try {
        const response = await fetch(url); // Fetch data from the given URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON response
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error); // Handle errors
        throw error;
    }
}

// Example usage:
fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
        console.log("Fetched data:", data); // Outputs the JSON data
    })
    .catch((error) => {
        console.error("Error:", error); // Handles any errors during fetch
    });
