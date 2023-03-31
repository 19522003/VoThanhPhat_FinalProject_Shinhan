import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import productApi from "../../api/productApi";

const App = ({ keyId }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const newProduct = await productApi
        .get(keyId)
        .then((product) => product.data);
      setProduct(newProduct);
    };
    getProduct();
  }, []);
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        <EyeOutlined /> Detail
      </Button>
      <Modal
        width={1000}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
      </Modal>
    </>
  );
};
export default App;
