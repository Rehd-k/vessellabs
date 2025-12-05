import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Security & Compliance - Vessel Labs",
    description: "Learn about Vessel Labs' security measures, certifications, and compliance standards",
};

export default function SecurityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}