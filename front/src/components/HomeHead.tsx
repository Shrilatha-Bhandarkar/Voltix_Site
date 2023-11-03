import "./styles/Home.css";
const HomeHead = () => {
  return (
    <div className="container-fluid homehead">
      
      <img
        className="img-fluid hh-img"
        src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698732684989_Home%20page.png?AWSAccessKeyId=XGQ6CZPFEFI6MI07ZDDW&Expires=1699030126&Signature=YMqiwuviwhVvEGnZiV2fXCj9n14%3D"
        alt="Welcome!"
      ></img><div className="col-1">
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
  );
};

export default HomeHead;
