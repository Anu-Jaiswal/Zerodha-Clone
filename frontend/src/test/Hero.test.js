import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe('Hero component', () => {
    test('renders Hero Image', () => {
        render(<Hero />);

        // Check if the hero image is rendered
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png'); // Replace with the actual path to your hero image
    });

    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", { name: "Signup now" });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});