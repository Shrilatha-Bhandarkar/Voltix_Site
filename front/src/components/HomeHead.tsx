import "./styles/Home.css";
const HomeHead = () => {
  return (
    <div className="container-fluid homehead">
      <div className="row">
      <img
        className="img-fluid hh-img"
        src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698732684989_Home%20page.png?AWSAccessKeyId=WNYR8KOHKV6PI9I7TUUC&Expires=1699336190&Signature=%2FU40DTes%2Bqs7KF1iaSBZ7pADtqU%3D"
        alt="Welcome!"
      ></img>
      <div className="col-1">
      <div className="textStyleLarge1">
        <p>
          Bring your <br></br>ideas to life!
        </p>
      </div>
      <div className="textStyleMedium1">
        Our team of talented and highly committed professionals<br></br>
        is the key to our success in creating business solutions.
      </div></div>
      </div>
    </div>
  );
};

export default HomeHead;
