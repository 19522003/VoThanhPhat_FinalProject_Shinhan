import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
const App = ({ theme, value }) => (
  <Card style={{ marginTop: "6px" }}>
    <Meta
      avatar={<Avatar src={theme.icon} />}
      title={theme.title}
      description={value}
      style={{
        fontSize: "24px",
      }}
    />
  </Card>
);
export default App;
