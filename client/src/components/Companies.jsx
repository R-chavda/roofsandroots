import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="primaryText">Our Partners</span>
        </div>
      </div>
      <div
        className="paddings innerWidth flexCenter c-container"
        id="c-container"
      >
        <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
