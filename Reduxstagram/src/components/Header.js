import React, { Component } from 'react';
import { Link } from 'react-router';

export const Header = props => {
    return (
        <div>
            <h1>
                <Link to="/">Hellogram</Link>
            </h1>
        </div>
    );
}