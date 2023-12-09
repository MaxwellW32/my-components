import Image from "next/image"
import styles from "./imageHeadingParagraph.module.css"
import { CSSProperties } from "react"

export default function TwoColumnHeader(
    {
        imageOptions = { alt: "image", src: "", styles: {} },
        headingOptions = { text: "Heading", styles: {} },
        paragraphOptions = { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat rerum explicabo voluptatem a? Alias libero dolore nesciunt, aliquam, repudiandae aspernatur nulla in iure dolorum explicabo impedit quaerat, consequatur temporibus.", styles: {} },
        paragraphAndHeadingContStyles,
        mainContStyles,
    }: {
        imageOptions?: { alt: string, src: string, styles: CSSProperties },
        headingOptions?: { text: string, styles: CSSProperties },
        paragraphOptions?: { text: string, styles: CSSProperties },
        paragraphAndHeadingContStyles?: CSSProperties,
        mainContStyles?: CSSProperties,
    }) {

    return (
        <div className="RU" style={{ padding: "1rem", display: "flex", flexWrap: "wrap", gap: "1rem", ...mainContStyles }}>
            <Image alt={imageOptions.alt} src={require("@/public/default-image-mountain.jpeg").default.src} width={1000} height={1000} style={{ flex: 1, width: "100%", height: "250px", objectFit: "cover", ...imageOptions.styles }} />

            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1rem", ...paragraphAndHeadingContStyles }}>
                <h1 className="RU_largeText" style={{ ...headingOptions.styles }}>{headingOptions.text}</h1>
                <p style={{ ...paragraphOptions.styles }}>{paragraphOptions.text}</p>
            </div>
        </div>
    )
}
