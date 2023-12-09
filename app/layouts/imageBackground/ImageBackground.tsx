import { ReactNode } from 'react'

export default function ImageBackground({
    children,
    elementProps,
    imageProps,
    backdropProps,

}: {
    children: ReactNode,
    elementProps?: React.HTMLAttributes<HTMLDivElement>,
    imageProps?: React.HTMLAttributes<HTMLDivElement>,
    backdropProps?: React.HTMLAttributes<HTMLDivElement>,
}) {

    return (
        <div {...elementProps} style={{ padding: "2rem 1rem", position: "relative", ...elementProps?.style }}>
            {children}

            <div {...imageProps} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, backgroundSize: "cover", backgroundPosition: "center", zIndex: -1, ...imageProps?.style }}></div>
            <div {...backdropProps} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -1, ...backdropProps?.style }}></div>
        </div>
    )
}
