import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [quote, setQuote] = useState(true);
    const url = "https://favqs.com/api/qotd"
    function fetchdata() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setQuote(data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(()=>{
        fetchdata()
    },[])

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', paddingTop: '50px' }}>
            <h2>Quote of the Day</h2>
            {quote && (
                <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', marginBottom: '20px' }}>
                    <p style={{ fontSize: '18px', marginBottom: '10px' }}>I constantly look up words and meanings in search of the perfect variable, method, and class names</p>
                    <p style={{ fontSize: '16px', fontStyle: 'italic', marginBottom: '10px' }}>Author Name: David Heinemeier Hansson</p>
                    {/* <p style={{ fontSize: '14px', color: '#666' }}>Quote of the day</p> */}
                </div>
            )}
        </div>
        // <div>data</div>
    );
}

export default Dashboard;
