import React, { HTMLAttributes, ReactNode } from 'react'

export default function FlexOverflowScroll({ children, ...elementProps }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...elementProps} style={{ display: "flex", overflowX: "auto", gap: "1rem", ...elementProps?.style }}>
            {children}
        </div>
    )
}
