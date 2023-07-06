import React from "react";
import { Navigation } from "./Navigation";
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>

export function Header() {
    return (
        <header>
            <div className = "logo">
                <h1>Thomas Scarlett</h1>
            </div>
            <Navigation />
        </header>
    );
}