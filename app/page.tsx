"use client"

import FlexOverflowScroll from "./flexes/FlexOverflowScroll/FlexOverflowScroll"
import GridBoxes from "./grids/gridBoxes/GridBoxes"
import ImageBackground from "./layout components/imageBackground/ImageBackground"
import TwoColumnHeader from "./layout components/twoColumnHeader/TwoColumnHeader"
import ColoredBox from "./useful/ColoredBox"


export default function Home() {
  return (
    <main style={{}}>
      <p style={{ marginTop: "0rem" }} className="signalText">Two Column Header</p>
      <TwoColumnHeader
        imageOptions={{ alt: "", src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
        headerEl={<h1 className="RU_largeText">Heading</h1>}
        textEl={<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum, sunt laboriosam illo non laudantium voluptates voluptas dolorem, maxime culpa quisquam, similique ad excepturi commodi. Tenetur rem dolores vel labore.</p>}
      />

      <p className="signalText">Two Column Header Reversed</p>
      <TwoColumnHeader
        imageOptions={{ alt: "", src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
        headerEl={<h1 className="RU_largeText">Heading</h1>}
        textEl={<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum, sunt laboriosam illo non laudantium voluptates voluptas dolorem, maxime culpa quisquam, similique ad excepturi commodi. Tenetur rem dolores vel labore.</p>}
        style={{
          flexDirection: "row-reverse",
        }}
      />


      <p className="signalText">Image Background</p>
      <ImageBackground
        imageProps={{
          style: {
            backgroundImage: `url("https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`
          }
        }}
        backdropProps={{
          style: {
            backgroundColor: "#000",
            opacity: .4
          }
        }}
      >
        <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
        <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
        <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
        <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
        <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
      </ImageBackground>

      <p className="signalText">Grid&apos;s</p>
      <GridBoxes
        spotlightedEl={<div style={{
          gridRow: "1/1",
          backgroundColor: "red",
        }}>hi there</div>}
        className="noScrollBar">
        {new Array(18).fill("").map((eachBox, eachBoxIndex) => <ColoredBox key={eachBoxIndex} number={eachBoxIndex + 1} />)}
      </GridBoxes>

      <p className="signalText">Flex Overflow Scroll</p>
      <FlexOverflowScroll style={{ padding: "1rem" }} className="noScrollBar">
        {new Array(18).fill("").map((eachBox, eachBoxIndex) => <ColoredBox key={eachBoxIndex} number={eachBoxIndex + 1} style={{ aspectRatio: "1/1", height: "200px" }} />)}
      </FlexOverflowScroll>
    </main>
  )
}
