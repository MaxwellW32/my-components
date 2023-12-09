import TwoColumnHeader from "./components/twoColumnHeader/TwoColumnHeader";


export default function Home() {
  return (
    <main style={{ display: "grid", gap: "1rem" }}>
      <p style={{ textAlign: "center" }}>Running tests</p>
      <br />

      <p className="signalText">Two Column Header</p>
      <TwoColumnHeader headingOptions={{ text: "Heading", styles: { color: "blue" } }} imageOptions={{ alt: "", src: "", styles: { height: "300px" } }} />
      <TwoColumnHeader mainContStyles={{ flexDirection: "row-reverse" }} />
    </main>
  )
}
