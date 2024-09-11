function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    return fetch(userUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user details. Status: ${response.status}`);
            }
            return response.json(); // Parse user details
        })
        .then((userData) => {
            // After fetching user details, fetch posts
            return fetch(postsUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch user posts. Status: ${response.status}`);
                    }
                    return response.json(); // Parse posts
                })
                .then((postsData) => {
                    return {
                        user: userData,
                        posts: postsData,
                    }; // Return both user details and posts
                });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error for further handling
        });
}

// Example usage:
fetchUserDataAndPosts(1)
    .then((result) => {
        console.log("User Details:", result.user);
        console.log("User Posts:", result.posts);
    })
    .catch((error) => {
        console.error("Error:", error); // Handle errors
    });
