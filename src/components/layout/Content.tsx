import React, {FC, ReactNode} from 'react';

interface IContentProps {
    children: ReactNode;
    className?: string;
}

const Content:FC<IContentProps> = ({children, className}) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default Content;
