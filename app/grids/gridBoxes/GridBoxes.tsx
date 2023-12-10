import { HTMLAttributes, ReactNode, cloneElement, Children } from "react"

export default function GridBoxes({
    children,
    spotlightedEl,
    ...elementProps
}: {
    children: ReactNode,
    spotlightedEl?: JSX.Element,
} & HTMLAttributes<HTMLDivElement>) {

    const additionalProps: HTMLAttributes<HTMLDivElement> = {
        style: {
            border: "2px solid green",
            gridColumn: "1/span 2",
            gridRow: "1/span 2",
            ...spotlightedEl?.props.style
        }
    };

    const enhancedSpotlightedEl = spotlightedEl ? cloneElement(spotlightedEl, { ...spotlightedEl.props, ...additionalProps }) : undefined;

    const childrenArray = Children.toArray(children);
    // const firstChild = childrenArray[0];
    // console.log(`$childrenArray`, childrenArray);
    console.log(`$chil`, children);

    return (
        <div {...elementProps} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gridAutoRows: "200px", ...elementProps?.style }}>
            {/* {enhancedSpotlightedEl} */}
            {/* {children} */}
            {children}
        </div>
    )
}
