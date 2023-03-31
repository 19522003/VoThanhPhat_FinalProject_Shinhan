import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <Carousel autoplay style={{ marginTop: "20px", height: "100%" }}>
    <div>
      <h3 style={contentStyle}>
        <img
          src="https://lb.islonline.com/static/licwww/resources/v1/images/help/user-management/user-management-meta.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img
          src="https://blog.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img
          src="https://sath.com/wp-content/uploads/2021/08/external-profile-management1.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzSxWgAzv10N0GvA6Ex0XFNqB4uIQUYy-iEJ9hVivXDP-85GCauwieMJOulUsoy4LJGc&usqp=CAU"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </h3>
    </div>
  </Carousel>
);
export default App;
