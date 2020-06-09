import React from 'react';

function Gate({isOpen}) {
    return (
        <div>
        { isOpen ? "Open" : "Closed" }
        </div>);
}

export default Gate;