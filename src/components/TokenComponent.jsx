import React from "react";

export default async function createToken(username, ADMINPASSWORD){
    // userdata should only be username and ADMINPASSWORD
    try {
        const response = await fetch("http://localhost:5174/api/token/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, ADMINPASSWORD })
        });
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('Error creating token:', error);
        throw error;
    }
}

export async function ValidateTokenComponent(token) {
    try {
        const response = await fetch("http://localhost:5174/api/token/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        });
        const text = await response.text();
        const data = text ? JSON.parse(text) : false;
        return data;
    } catch (error) {
        console.error('Error validating token:', error);
        return false;
    }
}

export async function ValidateTokenFromUserComponent(token) {
    
}