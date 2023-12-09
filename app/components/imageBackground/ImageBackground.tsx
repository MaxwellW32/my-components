import React, { ReactNode, CSSProperties } from 'react'

export default function ImageBackground({
    children,
    mainContStyles,
    backgroundImageStyles,
    backdropStyles,
    backgroundImageOptions,
}: {
    children: ReactNode,
    mainContStyles?: CSSProperties,
    backgroundImageStyles?: CSSProperties,
    backdropStyles?: CSSProperties,
    backgroundImageOptions: { src: string, styles: CSSProperties },
}) {

    return (
        <div style={{ padding: "2rem 1rem", position: "relative", ...mainContStyles }}>
            {children}

            <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, backgroundImage: backgroundImageOptions.src, backgroundSize: "cover", backgroundPosition: "center", zIndex: -1, ...backgroundImageStyles }}></div>

            {/* backdrop */}
            <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -1, ...backdropStyles }}></div>
        </div>
    )
}
