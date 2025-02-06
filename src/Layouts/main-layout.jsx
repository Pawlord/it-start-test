import React from 'react';

// Стили
import './main-layout.scss';

export function MainLayout({ children }) {
    return (
        <div className='main-container'>
            {children}
        </div>
    )
}