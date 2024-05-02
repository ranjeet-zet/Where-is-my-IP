import { NextResponse } from 'next/server';

export async function GET(request) {
    // Extract IP address from request headers
    const ip = request.headers["x-forwarded-for"] || request.headers["x-real-ip"] || request.connection?.remoteAddress;

    console.log(ip)

    
    // Initialize requestData variable
    let requestData;

    // Check if request contains JSON data
    if (request.headers['content-type'] === 'application/json') {
        try {
            // Attempt to parse JSON data from the request body
            requestData = await request.json();
        } catch (error) {
            // Handle parsing error
            console.error('Error parsing JSON data:', error);
            requestData = null;
        }
    } else {
        // Request does not contain JSON data
        console.error('Error: Request does not contain JSON data');
        requestData = null;
    }

    // Construct response message including IP address, request data, and a greeting
    const message = {
        iip: ip,
        requestData: requestData,
        greeting: "Hello from Server"
    };

    // Return response with JSON containing IP address, request data, and greeting
        // Set cookies in the response
        const cookies = [
            `cookieName1=cookieValue1; Path=/; Max-Age=3600; HttpOnly; Secure`,
            `cookieName2=cookieValue2; Path=/; Max-Age=3600; HttpOnly; Secure`,
            `cookieName3=${ip}; Path=/; Max-Age=3600; HttpOnly; Secure`,
            
            
        ];
    
    return NextResponse.json({ message }, { headers: { 'Set-Cookie': cookies } });
}
