
import CardBackgroundUpColorChange from "@/components/cards/backgroundUpColorChange/CardBackgroundUpColorChange"
import FlexOverflowScroll from "@/components/flexes/FlexOverflowScroll/FlexOverflowScroll"
import FlexWrapCenter from "@/components/flexes/flexWrapCenter/FlexWrapCenter"
import GridBoxes from "@/components/grids/gridBoxes/GridBoxes"
import GridRowOverflowY from "@/components/grids/gridRowOverflowY.tsx/GridRowOverflowY"
import ImageBackground from "@/components/layouts/imageBackground/ImageBackground"
import ImageBackgroundTwoColumn from "@/components/layouts/imageBackgroundTwoColumn/ImageBackgroundTwoColumn"
import ImageTwoColumn from "@/components/layouts/imageTwoColumn/ImageTwoColumn"
import ThreePartDisplay from "@/components/layouts/threePartDisplay/ThreePartDisplay"
import TwoColumn from "@/components/layouts/twoColumn/TwoColumn"
import TwoColumnHeader from "@/components/layouts/twoColumnHeader/TwoColumnHeader"

import ColoredBox from "@/useful/ColoredBox"
import Image from "next/image"


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

      <p className="signalText">Two Column</p>
      <TwoColumn
        firstEl={<div style={{ backgroundColor: "red", height: "300px" }}>h1
        </div>}
        secondEl={<div style={{ backgroundColor: "green", height: "300px" }}>hey</div>}
      />


      <p className="signalText">Image Two Column</p>
      <ImageTwoColumn
        imageOptions={{ alt: "", src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
        secondEl={
          <div style={{}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt aliquid magnam cumque, nobis perferendis quis distinctio non vitae ipsam cum voluptatum ea praesentium autem deleniti dolorum exercitationem earum aut!</p>
          </div>}
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

      <p className="signalText">Image Background Two Column</p>
      <ImageBackgroundTwoColumn
        backgroundImageProps={{
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

        backgroundImageChildren={
          <div>
            <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
            <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
            <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
            <h1 className='RU_largeText' style={{ textAlign: "center" }}>Image Background</h1>
          </div>
        }

        secondEl={
          <div style={{}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt aliquid magnam cumque, nobis perferendis quis distinctio non vitae ipsam cum voluptatum ea praesentium autem deleniti dolorum exercitationem earum aut!</p>
          </div>}
      />

      <p className="signalText">Grid Boxes</p>
      <GridBoxes
        // spotlightedEl={<div style={{
        //   gridRow: "1/1",
        //   backgroundColor: "red",
        // }}>hi there</div>}
        breakPoint="100px"
        className="noScrollBar">
        {new Array(4).fill("").map((eachBox, eachBoxIndex) => <ColoredBox key={eachBoxIndex} number={eachBoxIndex + 1} />)}
      </GridBoxes>

      <p className="signalText" >Grid Row Overflow Y</p>
      <GridRowOverflowY
        className="noScrollBar"
        amtOfRows={2}
      >
        {new Array(20).fill("").map((eachBox, eachBoxIndex) => <ColoredBox key={eachBoxIndex} number={eachBoxIndex + 1} />)}
      </GridRowOverflowY>


      <p className="signalText">Flex Overflow Scroll</p>
      <FlexOverflowScroll style={{ padding: "1rem" }} className="noScrollBar">
        {new Array(18).fill("").map((eachBox, eachBoxIndex) => <ColoredBox key={eachBoxIndex} number={eachBoxIndex + 1} style={{ aspectRatio: "1.5/1", height: "200px", }} />)}
      </FlexOverflowScroll>

      <p className="signalText">Flex Wrap Center</p>
      <FlexWrapCenter
      >
        {new Array(7).fill("").map((eachBox, eachBoxIndex) => <ColoredBox key={eachBoxIndex} number={eachBoxIndex + 1} style={{ aspectRatio: "1.5/1", height: "200px", }} />)}
      </FlexWrapCenter>

      <p className="signalText">Three Part Display</p>
      <ThreePartDisplay
        style={{
          gridTemplateColumns: "auto 3fr",
        }}
        firstElement={
          <svg style={{ width: "100%", maxWidth: "100px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
        }
        secondElement={<h2>APPOINTMENT</h2>}
        thirdElement={<p>Call our office today, or make an appointment online. We look forward to welcoming you to our beautiful  office!</p>}
      />

      <p className="signalText">Card - Background Up Color Change</p>
      <CardBackgroundUpColorChange

        titleEl={<h1 style={{ textAlign: "center" }}>Hello</h1>}

        imageOptions={{ alt: "", src: `https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2` }}

        backdropProps={{
          style: {
            backgroundColor: "#000",
            opacity: 0.2
          }
        }}

        style={{
          height: "200px",
          width: "200px"
        }}
      />
    </main>
  )
}
