import ImageBackground from "./components/imageBackground/ImageBackground";
import TwoColumnHeader from "./components/twoColumnHeader/TwoColumnHeader";


export default function Home() {
  return (
    <main style={{ display: "grid", gap: "1rem" }}>
      <p className="signalText">Two Column Header</p>
      <TwoColumnHeader
        paragraphOptions={{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat rerum explicabo voluptatem a? Alias libero dolore nesciunt, aliquam, repudiandae aspernatur nulla in iure dolorum explicabo impedit quaerat, consequatur temporibus.", styles: {} }}
        imageOptions={{ alt: "image", src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", styles: { height: "300px" } }}
        headingOptions={{ text: "Heading", styles: {} }}
      />

      <p className="signalText">Two Column Header Reversed</p>
      <TwoColumnHeader
        mainContStyles={{ flexDirection: "row-reverse" }}
        paragraphOptions={{ text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat rerum explicabo voluptatem a? Alias libero dolore nesciunt, aliquam, repudiandae aspernatur nulla in iure dolorum explicabo impedit quaerat, consequatur temporibus.", styles: {} }}
        imageOptions={{ alt: "image", src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", styles: { height: "300px" } }}
        headingOptions={{ text: "Heading", styles: {} }}
      />

      <p className="signalText">Image Background</p>
      <ImageBackground
        backgroundImageOptions={{ src: `url(https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, styles: {} }}
        backdropStyles={{ backgroundColor: "white", opacity: 0.4 }}
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
