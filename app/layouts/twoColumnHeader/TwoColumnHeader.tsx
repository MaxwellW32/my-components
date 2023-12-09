import Image from "next/image"

export default function TwoColumnHeader(
    {
        imageOptions,
        headerEl,
        textEl,
        elementProps,
        imageProps,
        headerAndTextContainerProps,
    }: {
        imageOptions: { src: string, alt: string, resolution?: number }
        headerEl: JSX.Element,
        textEl: JSX.Element,
        elementProps?: React.HTMLAttributes<HTMLDivElement>,
        imageProps?: React.HTMLAttributes<HTMLImageElement>,
        headerAndTextContainerProps?: React.HTMLAttributes<HTMLDivElement>,
    }) {


    return (
        <div {...elementProps} style={{ padding: "1rem", display: "flex", flexWrap: "wrap", gap: "1rem", ...elementProps?.style }}>
            <Image {...imageProps as any} alt={imageOptions.alt} src={imageOptions.src} width={imageOptions.resolution ?? 1200} height={imageOptions.resolution ?? 1200} style={{ flex: `1 1 300px`, height: "350px", objectFit: "cover", ...imageProps?.style }} />

            <div {...headerAndTextContainerProps} style={{ flex: `1 1 300px`, display: "flex", flexDirection: "column", gap: "1rem", ...headerAndTextContainerProps?.style }}>
                {headerEl}
                {textEl}
            </div>
        </div>
    )
}