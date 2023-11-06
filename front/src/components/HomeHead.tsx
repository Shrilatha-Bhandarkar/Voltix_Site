import "./styles/Home.css";
const HomeHead = () => {
  return (
    <div className="container-fluid homehead">
      <div className="row">
      <img
        className="img-fluid hh-img"
        src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1699250140778_New%20HomePage.png?AWSAccessKeyId=YKV4FIP7HJQLX9UEZ0UA&Expires=1699294797&Signature=VbuTW6JoFsGWmWF2OKhMBa1cNjY%3D"
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
    </div>
  );
};

export default HomeHead;
