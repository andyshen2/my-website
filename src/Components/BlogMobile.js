const BlogMobile = () => {
  return (
    <div className="mobile-blog">
      <h1>Andy Shen </h1>
      <img className="mobile-image" src={require("./images/me.jpg")} />

      <div>
        <h1>Blog</h1>
        <div>
          <h2> What The Duck</h2>
          <hr />
          <br />
          <img className="mobile-image" src={require("./images/duck.png")} />
          <p>
            For my honours project, I wanted to centre it around machine
            learning and application building. This lead me to build a mobile
            application which classifies images of animals and plants by
            species.
          </p>
          <Link className="links" to="/app">
            READ MORE
          </Link>
        </div>

        <div>
          <h2>Fergus</h2>
          <hr />
          <br />
          <img className="mobile-image" src={require("./images/fergus.png")} />
          <p>
            As apart of the Summer of Tech internship program,I spent a summer
            working at Fergus - a Service Product which provide job management
            solutions for the trade industry.
          </p>
          <Link className="links" to="/fergus">
            READ MORE
          </Link>
        </div>

        <div>
          <h2>myfreshproduce</h2>
          <hr />
          <br />
          <img
            className="mobile-image"
            src={require("./images/myfreshproduce.png")}
          />
          <p>
            Myfreshproduce deliver fruit and vege packs to families and
            companies all around Palmerston North. With the recent lockdown
            happening, Jason from myfreshproduce received a spike in demand and
            the business was growing quickly. During this time{" "}
            <a name="jess" href="https://www.linkedin.com/in/jessicawong888/">
              Jess Wong
            </a>{" "}
            and I created an E-commerce store to help Jason be able to handle
            this growth. It was an awesome experince working a with a company so
            loved by the community. <br />
            <br />
            Check it out at:
            <br />
            <br />
            <a className="links" href="https://myfreshproduce.co.nz">
              myfreshproduce.co.nz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
