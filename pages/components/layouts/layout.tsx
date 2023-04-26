import React, { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-[1440px]">
                <main className="container mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;