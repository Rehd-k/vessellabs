import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "Contact Vessel Labs - Get in Touch",
    description: "Get in touch with Vessel Labs for inquiries, support, and more information about our services",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}