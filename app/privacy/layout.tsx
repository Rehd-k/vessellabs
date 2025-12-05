import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Privacy Policy - Vessel Labs",
    description: "Read our privacy policy to understand how Vessel Labs protects your data",
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}