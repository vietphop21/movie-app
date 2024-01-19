import { Button, Result } from "antd";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn tìm kiếm không tồn tại."
        extra={<Button type="primary">Quay lại Trang chủ</Button>}
      />
    </>
  );
}
