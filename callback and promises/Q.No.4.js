async function fetchData(url) {
    try {
        const response = await fetch(url); // Fetch data from the provided URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON response
        return data;
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
        throw error; // Re-throw the error for further handling
    }
}

// Example usage:
fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
    })
    .catch((error) => {
        console.error("Fetch error:", error); // Handle errors if any
    });
