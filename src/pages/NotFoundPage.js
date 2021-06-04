import React from 'react';
import image from '../assets/404.png';

function NotFoundPage() {
    return (
        <div style={{ margin: "105px 0 0" }} className="text-center">
            <img src={image} alt="404 page not found" width={720} />
        </div>
    )
}

export default NotFoundPage