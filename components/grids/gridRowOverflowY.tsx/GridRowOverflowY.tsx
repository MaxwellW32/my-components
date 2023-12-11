import { HTMLAttributes, ReactNode, cloneElement, Children } from "react"

export default function GridRowOverflowY({
    children,
    breakPoint = "200px",
    rowHeight = "200px",
    amtOfRows = 2,
    ...elementProps
}: {
    children: ReactNode,
    breakPoint?: string,
    rowHeight?: string,
    amtOfRows?: number,
} & HTMLAttributes<HTMLDivElement>) {

    return (
        <div {...elementProps} style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: breakPoint, gap: "1rem", gridTemplateRows: `repeat(${amtOfRows}, ${rowHeight})`, maxWidth: "100%", overflowY: "auto", ...elementProps?.style }}>
            {children}
        </div>
    )
}
