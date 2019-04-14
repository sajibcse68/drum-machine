import React from "react";

const Header = (o) => {
  return (
    <div className="column is-6 is-offset-3">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 id="display" className="title has-text-centered">
              { o.display }
            </h1>
            {/* <h2 className="subtitle has-text-centered">
              Primary subtitle
            </h2> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header;