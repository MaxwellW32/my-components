"use client"
import { useRef } from 'react'

export default function ColoredBox() {
    const randR = useRef(Math.floor(Math.random() * 256))
    const randG = useRef(Math.floor(Math.random() * 256))
    const randB = useRef(Math.floor(Math.random() * 256))


    return (
        <div style={{ height: randR.current > 50 ? "500px" : "", backgroundColor: `rgb(${randR.current}, ${randG.current}, ${randB.current})` }}></div>
    )
}
