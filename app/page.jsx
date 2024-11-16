import Alumni from "./(components)/Alumni/Alumni";
import Banner from "./(components)/Banner/Banner";
import Logos from "./(components)/Logos/Logos";
import Navbar from "./(components)/Navbar/Navbar";
import Service1 from "./(components)/Service/Service1";
import Service2 from "./(components)/Service/Service2";

export default function Home() {
  return (
    <main className="relative z-[1]">
      <Navbar />
      <Banner />
      <Logos />
      <Service1 />
      <Service2 />
      <Alumni />



      <div className="absolute top-0 right-0 z-[-1]">
        <img src="/HERObackgroundTwo.svg" alt="" />
      </div>
    </main>
  );
}
