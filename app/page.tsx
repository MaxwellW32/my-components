"use client"
import TwoColumnHeader from "./layouts/twoColumnHeader/TwoColumnHeader";
import ImageBackground from "./layouts/imageBackground/ImageBackground";


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
    </main>
  )
}
