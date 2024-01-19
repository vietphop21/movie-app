import Search from "antd/es/input/Search";
import React from "react";

const InputSearch = () => {
  return (
    <Search
      placeholder="Tìm kiếm"
      enterButton="Search"
      size="large"
      loading={false}
    />
  );
};

export default InputSearch;
