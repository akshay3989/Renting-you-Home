import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      
      {/* Left Text Section */}
      <div className="textContainer">
        <div className="wrapper">

          {/* Title + Description */}
          <header>
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              explicabo suscipit cum eius, iure est nulla animi consequatur
              facilis id pariatur fugit quos laudantium temporibus dolor ea
              repellat provident impedit!
            </p>
          </header>

          {/* Search Section */}
          <section className="searchSection">
            <SearchBar />
          </section>

          {/* Stats Boxes */}
          <section className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </section>

        </div>
      </div>

      {/* Right Image Section */}
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>

    </div>
  );
}

export default HomePage;
