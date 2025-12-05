import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Partner with Vessel Labs - Strategic Partnerships",
    description: "Discover partnership opportunities with Vessel Labs and grow your business together",
};

export default function PartnersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}