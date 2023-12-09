import Image from "next/image"
import styles from "./imageHeadingParagraph.module.css"
import { CSSProperties } from "react"

export default function TwoColumnHeader(
    {
        imageOptions,
        imageQuality = 1500,
        headingOptions,
        paragraphOptions,
        paragraphAndHeadingContStyles,
        mainContStyles,
    }: {
        imageOptions: { alt: string, src: string, styles: CSSProperties },
        headingOptions: { text: string, styles: CSSProperties },
        paragraphOptions: { text: string, styles: CSSProperties },
        imageQuality?: number,
        paragraphAndHeadingContStyles?: CSSProperties,
        mainContStyles?: CSSProperties,
    }) {

    return (
        <div style={{ padding: "1rem", display: "flex", flexWrap: "wrap", gap: "1rem", ...mainContStyles }}>
            <Image alt={imageOptions.alt} src={imageOptions.src} width={imageQuality} height={imageQuality} style={{ flex: "1 1 300px", width: "100%", height: "250px", objectFit: "cover", ...imageOptions.styles }} />

            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1rem", ...paragraphAndHeadingContStyles }}>
                <h1 className="RU_largeText" style={{ ...headingOptions.styles }}>{headingOptions.text}</h1>

                <p style={{ ...paragraphOptions.styles }}>{paragraphOptions.text}</p>
            </div>
        </div>
    )
}
