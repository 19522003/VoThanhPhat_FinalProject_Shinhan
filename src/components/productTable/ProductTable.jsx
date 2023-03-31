import { SearchOutlined } from "@ant-design/icons";
import { Button, Image, Input, Space, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import productApi from "../../api/productApi";
import ProductModal from "../productModal/ProductModal";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [listProduct, setListProduct] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    const getListProduct = async () => {
      const newListProduct = await productApi.getAll().then((product) => {
        setSpinner(false);
        return product.data;
      });
      setListProduct(newListProduct);
      console.log(newListProduct);
    };
    getListProduct();
  }, []);
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const data = listProduct.map((item) => {
    return {
      ...item,
      key: item.id,
      url: item.thumbnail ? item.thumbnail.url : "No image",
    };
  });
  const columns = [
    {
      align: "center",
      title: "Product image",
      key: "url",
      dataIndex: "url",
      render: (url) => {
        if (url === "No image") return <p>{url}</p>;
        return (
          <Image
            width={100}
            style={{ borderRadius: "10px" }}
            src={`https://api.ezfrontend.com${url}`}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Price",
      dataIndex: "originalPrice",
      key: "originalPrice",
      width: "20%",
      ...getColumnSearchProps("originalPrice"),
    },
    {
      title: "Create date",
      dataIndex: "created_at",
      key: "created_at",
      ...getColumnSearchProps("created_at"),
      sorter: (a, b) => a.created_at.length - b.created_at.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ProductModal keyId={record.key} />
        </Space>
      ),
    },
  ];
  return <Table loading={spinner} columns={columns} dataSource={data} />;
};
export default App;
