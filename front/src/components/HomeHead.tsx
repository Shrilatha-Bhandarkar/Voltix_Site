import "./styles/Home.css";
const HomeHead = () => {
  return (
    <div className="container-fluid homehead">
      <img
        className="img-fluid hh-img"
        src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698732684989_Home%20page.png?AWSAccessKeyId=CXCUL3NKHFVBFYWGBXT0&Expires=1698813077&Signature=24N%2BC7x0As8iqSM1zrhBCaIQbGY%3D"
        alt="Welcome!"
      ></img>
      <div className="textStyleLarge1">
        <p>
          Bring your <br></br>ideas to life!
        </p>
      </div>
      <div className="textStyleMedium1">
        Our team of talented and highly committed professionals<br></br>
        is the key to our success in creating business solutions.
      </div>
    </div>
  );
};

export default HomeHead;
