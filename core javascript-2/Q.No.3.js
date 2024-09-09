// Create a Map to store contact information
const contacts = new Map();

// Adding contacts to the Map
contacts.set('John Doe', { age: 25, email: 'john@example.com', location: 'New Delhi' });
contacts.set('Jane Smith', { age: 30, email: 'jane@example.com', location: 'Ahemdabad' });
contacts.set('Mark Brown', { age: 28, email: 'mark@example.com', location: 'Indore' });

// Function to retrieve contact details by name
const getContactDetails = (name) => {
  if (contacts.has(name)) {
    return contacts.get(name);
  } else {
    return 'Contact not found.';
  }
};

// Example: retrieving contact details for 'Jane Smith'
const contact = getContactDetails('Jane Smith');
console.log(contact);
