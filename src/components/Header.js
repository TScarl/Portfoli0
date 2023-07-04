import React from "react";
import { Navigation } from "./Navigation";

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