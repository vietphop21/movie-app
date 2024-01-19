import Image from "next/image";
import { Button, Result } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <Result
      title="Chào mừng bạn đến với website xem phim"
      extra={
        <Button type="primary" key="console">
          <Link href="/movie"> Nhấn vào đây để tiếp tục</Link>
        </Button>
      }
    />
  );
}
