import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Request a Demo - Vessel Labs",
    description: "Request a personalized demo of Vessel Labs' enterprise software solutions",
};

export default function RequestDemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}