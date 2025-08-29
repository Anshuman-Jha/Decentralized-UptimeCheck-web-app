"use client";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { API_BACKEND_URL } from "@/configuration";
import axios from "axios";

interface Website {
    id: string;
    url: string;
    WebsiteTicks: {
        id: string;
        createdAt: string;
        status: "GOOD" | "BAD";
        latency: number;
    }[];
}
// Created Custom useWebsite Hook which updates status of website after 3 minutes
// If 5 or More Validator report to be  website was down around ex-3:00 PM 
//Then We will Aggregate that Report => Show the Ticks as Result
export function useWebsites() {
    // In Clerk via useAuth() you receive Webtoken via this 
    const { getToken, isSignedIn, isLoaded } = useAuth();
    const [websites, setwebsites] = useState<Website[]>([]);

    const refreshWebsites = async () => {
        try {
            // Check if user is signed in and Clerk is loaded
            if (!isLoaded) {
                console.log('Clerk is still loading...');
                return;
            }

            if (!isSignedIn) {
                console.log('User is not signed in');
                return;
            }

            const token = await getToken();

            if (!token) {
                console.error('No token available');
                return;
            }

            console.log('Token obtained successfully');
            console.log('Making request to:', `${API_BACKEND_URL}/api/v1/websites`);
            console.log('Token preview:', token ? `${token.substring(0, 20)}...` : 'No token');

            //Make Sure you able to get website only to owner/correct headers 
            const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                timeout: 10000, // 10 second timeout
            });

            setwebsites(Array.isArray(response.data) ? response.data : (response.data?.websites ?? []))

            // Debug logging to see actual data structure
            console.log('API Response data:', response.data);
            console.log('Processed websites:', Array.isArray(response.data) ? response.data : (response.data?.websites ?? []));
        } catch (error) {
            console.error('Error fetching websites:', error);
            if (axios.isAxiosError(error)) {
                console.error('Axios error status:', error.response?.status);
                console.error('Axios error status text:', error.response?.statusText);
                console.error('Axios error data:', error.response?.data);
                console.error('Axios error headers:', error.response?.headers);
                console.error('Axios error config:', {
                    url: error.config?.url,
                    method: error.config?.method,
                    baseURL: error.config?.baseURL,
                    timeout: error.config?.timeout
                });
            } else {
                console.error('Non-Axios error:', error);
            }
        }
    }

    // Can't make async () => {} this function of useEffect()
    useEffect(() => {
        // Only try to refresh if Clerk is loaded and user is signed in
        if (isLoaded && isSignedIn) {
            refreshWebsites();
            // After 1 minute See the updates of Websites have they gone up or down / new website is added ??
            const interval = setInterval(() => {
                refreshWebsites();
            }, 1000 * 60 * 1);

            return () => {
                clearInterval(interval);
            }
        }
    }, [isLoaded, isSignedIn]); // Add dependencies to useEffect
    // Along with websites we keep refreshing websites 
    return { websites: websites, refreshWebsites };
}

