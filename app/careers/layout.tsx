import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "Careers at Vessel Labs - Join Our Team",
    description: "Explore exciting career opportunities at Vessel Labs and join our talented team",
};
export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}