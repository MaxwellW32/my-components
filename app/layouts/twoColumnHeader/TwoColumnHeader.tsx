import Image from "next/image"

export default function TwoColumnHeader(
    {
        imageOptions,
        headerEl,
        textEl,
        imageProps,
        headerAndTextContainerProps,
        breakPoint = "200px",
        ...elementProps
    }: {
        imageOptions: { src: string, alt: string, resolution?: number }
        headerEl: JSX.Element,
        textEl: JSX.Element,
        imageProps?: React.HTMLAttributes<HTMLImageElement>,
        headerAndTextContainerProps?: React.HTMLAttributes<HTMLDivElement>,
        breakPoint?: string
    } & React.HTMLAttributes<HTMLDivElement>) {


    return (
        <div {...elementProps} style={{ padding: "1rem", display: "flex", flexWrap: "wrap", columnGap: "1rem", ...elementProps?.style }}>
            <Image {...imageProps as any} alt={imageOptions.alt} src={imageOptions.src} width={imageOptions.resolution ?? 1200} height={imageOptions.resolution ?? 1200} style={{ flex: `1 1 min(${breakPoint},100%)`, height: "350px", width: "100%", minWidth: "0px", objectFit: "cover", ...imageProps?.style }} />

            <div {...headerAndTextContainerProps} style={{ flex: `1 1 min(${breakPoint},100%)`, display: "flex", flexDirection: "column", padding: "1rem", gap: "1rem", ...headerAndTextContainerProps?.style }}>
                {headerEl}
                {textEl}
            </div>
        </div>
    )
}