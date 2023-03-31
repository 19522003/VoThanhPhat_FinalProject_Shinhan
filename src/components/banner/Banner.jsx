import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { useState } from "react";
const App = () => {
  const [reverse] = useState(false);

  return (
    <div>
      <h5
        style={{
          padding: "20px",
          fontSize: "20px",
          color: "red",
        }}
      >
        System timeline
      </h5>
      <Timeline
        pending="Recording..."
        reverse={reverse}
        items={[
          {
            children: "Create a services site 2015-09-01",
          },

          {
            children: "Technical testing 2015-09-01",
          },
          {
            children: "Solve initial network problems 2015-09-01",
            color: "green",
          },
          {
            dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
            children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
          },
          {
            color: "red",
            children: "Network problems being solved 2015-09-01",
          },
        ]}
      />
    </div>
  );
};
export default App;
