import "./styles/About.css";
const AboutHead = () => {
  return (
    <div className="container-fluid abouthead">
      <img
        className="img-fluid ah-img"
        src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698747450835_ABOUT%20main.png?AWSAccessKeyId=Y4U6BU1GFZVKHHPYTUF6&Expires=1698852903&Signature=mHkIXbF%2BU27mAMP8reVzBAWoiEc%3D"
        alt="Welcome!"
      ></img>
      <div className="textStyleLarges1">
        <p>
          We are here to redefine <br></br>the way you do your business!
        </p>
      </div>
      <div className="textStyleMediums1">
        Our team of talented and highly committed professionals<br></br>
        is the key to our success in creating business solutions.
      </div>
      <div className="text1">
        <p>Planning it right</p>
        <p>
          We hold one-to-one meetings with the clients and carefully analyze
          <br></br>
          their needs to form a viable idea that is practicable under their
          budget.
        </p>
      </div>
      <div className="text2">
        <p>Making it as per plan</p>
        <p>
          We then form a project schedule and create a deadline including all
          processes <br></br> involved in it and completes everything on schedule..
        </p>
      </div>
      <div className="text3">
        <p>Delivering it on-time</p>
        <p>
          After a thorough quality check and testing, we deliver the product to
          the clients <br></br>after confirming the final output with them.
        </p>
      </div>
    </div>
  );
};

export default AboutHead;
