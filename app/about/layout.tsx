import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "About Vessel Labs - Our Mission & Values",
    description: "Learn about Vessel Labs' mission, vision, and the team behind our enterprise software solutions",
};
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}