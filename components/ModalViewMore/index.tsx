import { URL_IMAGE } from "@/constant";
import { Button, Drawer, Image, Space } from "antd";
import { IMovie } from "../ListMovie";

interface IPropsViewMore {
  item: IMovie | undefined;
  setOpen: any;
  open: boolean;
}

interface IArrayInfo {
  title: string;
  data: string | number | undefined;
}

const ModalViewMore = (props: IPropsViewMore) => {
  let { item, setOpen, open } = props;

  const onClose = () => {
    setOpen(false);
  };

  const arrayInfo = [
    {
      title: "IMDb",
      data: item?.vote_average,
    },
    {
      title: "Ngày phát hành",
      data: item?.release_date,
    },
    {
      title: "Overview",
      data: item?.overview,
    },
  ];

  const mapInfoMovie = (arrayInfo: IArrayInfo[]) => {
    const jsxElements = arrayInfo?.map((item, index) => (
      <p key={index} style={{ fontSize: "16px", padding: "5px" }}>
        <strong>{item?.title}</strong>: {item?.data}
      </p>
    ));

    return jsxElements;
  };

  return (
    <>
      <Drawer
        title="View more Movie"
        placement="right"
        size="large"
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Close</Button>
          </Space>
        }
      >
        <Image
          src={`${URL_IMAGE}` + `${item?.poster_path}`}
          width="80%"
          className="image-detail"
          preview={false}
        />
        {mapInfoMovie(arrayInfo)}
      </Drawer>
    </>
  );
};
export default ModalViewMore;
