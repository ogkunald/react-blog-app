import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

const NotFound = () => {
    const history = useHistory();
    useEffect(() => {
        setInterval(() => {

            history.push("/");
        }, 3000);
    });
    return (
        
        <div className = "not-found">
            <h2>Sorry</h2>
            <p>Page cannot be found</p>

            <Link to="/">Back to the homepage</Link>
        </div>
    )
}

export default NotFound
