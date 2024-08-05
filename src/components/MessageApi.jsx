import React, { useState, useEffect } from "react";

import axios from "axios";

import { AprUrl } from "../contexts/ids";

export const MessageApi = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [message, setMessage] = useState('');

    useEffect(() => {
      const fetchAverageScore = async () => {
        try {
          const response = await axios.get(`${AprUrl}/score`);
          setMessage(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching average score:', error);
        }
      };
  
      fetchAverageScore();
    }, []);
  
    return (

        isLoading,
        <div>
            <p>This Anime is: { message }</p>
      </div>
    );
}