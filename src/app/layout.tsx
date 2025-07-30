import {ReactNode} from "react";
import Navigation from "../components/Navigation.tsx";
import type { Metadata } from 'next';

import "./global.css";

export const metadata: Metadata = {
    title: 'First Place Team',
    description: 'Cyber Security Project',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div id="root">
                    <Navigation />
                    {children}
                </div>
            </body>
        </html>
    )
}