//Email and password login, create account or login

export default async function createUser(username, email, password, adminPassword) {
    try {
        const response = await fetch('http://localhost:5174/api/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, ADMINPASSWORD: adminPassword }),
        });
    
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('Response data:', data);
        // Handle the response data as needed
        return data;
    } catch (error) {
        console.error('Error during POST request:', error);
        // Handle error here
        return error;
    }
}

export async function tokenLogin(token){

}