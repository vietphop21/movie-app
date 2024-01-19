"use client";
import { URL_IMAGE } from "@/constant";
import { getMovieApi, getMovieData } from "@/lib/slice/slice";
import {
  Button,
  Card,
  Col,
  Flex,
  Image,
  Pagination,
  PaginationProps,
  Row,
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingMovie from "../LoadingMovie";
import { PlayCircleOutlined } from "@ant-design/icons";
import ModalViewMore from "../ModalViewMore";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  vote_averag: string | number;
}

export interface IMovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const { Meta } = Card;

const ListMovie = () => {
  const dispatch = useDispatch<any>();
  const listMovieSelector = useSelector(getMovieData);
  const listMovie = listMovieSelector?.listMovie;
  const isLoading = listMovieSelector?.loadingListMovie;
  const [current, setCurrent] = useState(1);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<IMovie>();

  useEffect(() => {
    dispatch(getMovieApi(1));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    dispatch(getMovieApi(page));
  };

  const handleViewmore = (item: IMovie) => {
    setOpen(true);
    setItem(item);
  };

  const buttonViewMore = (item: IMovie) => {
    return (
      <Button
        type="primary"
        icon={<PlayCircleOutlined />}
        size="large"
        onClick={() => handleViewmore(item)}
      >
        View more
      </Button>
    );
  };

  return (
    <>
      {isLoading ? (
        <LoadingMovie />
      ) : (
        <>
          <Row gutter={[48, 16]}>
            {listMovie?.results?.length > 0 &&
              listMovie?.results.map((item: IMovie) => (
                <Col key={item?.id} span={6} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={
                      <Image
                        src={`${URL_IMAGE}${item?.backdrop_path}`}
                        width="100%"
                        height={350}
                        className="image"
                      />
                    }
                  >
                    <Meta
                      title={item?.original_title}
                      description={buttonViewMore(item)}
                      className="title-movie"
                    />
                  </Card>
                </Col>
              ))}
          </Row>
          <Flex justify="center" style={{ marginTop: 16 }}>
            <Pagination current={current} total={500} onChange={onChange} />
          </Flex>
          {open && <ModalViewMore open={open} setOpen={setOpen} item={item} />}
        </>
      )}
    </>
  );
};

export default ListMovie;
