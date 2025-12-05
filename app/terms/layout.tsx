import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Terms of Service - Vessel Labs",
  description: "Review the terms and conditions governing the use of Vessel Labs services",
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}