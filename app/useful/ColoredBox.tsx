"use client"
import { HTMLAttributes, useRef } from 'react'

export default function ColoredBox({ number, ...elementProps }: { number?: number } & HTMLAttributes<HTMLDivElement>) {
    const randR = useRef(Math.floor(Math.random() * 256))
    const randG = useRef(Math.floor(Math.random() * 256))
    const randB = useRef(Math.floor(Math.random() * 256))


    return (
        <div {...elementProps} style={{ backgroundColor: `rgb(${randR.current}, ${randG.current}, ${randB.current})`, ...elementProps?.style }}>{number}</div>
    )
}
