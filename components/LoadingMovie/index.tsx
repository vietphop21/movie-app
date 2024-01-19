import React from "react";
import { Skeleton, Row, Col, Card } from "antd";

const LoadingMovie: React.FC = () => {
  const cardData = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <>
      {cardData?.map((itemContainer) => {
        return (
          <Row gutter={[16, 16]} key={itemContainer}>
            {cardData.map((item) => (
              <Col key={item} span={6} xs={24} sm={12} md={8} lg={6}>
                <Card hoverable>
                  <Skeleton
                    avatar={{ shape: "square", className: "image-skeleton" }}
                    paragraph={{ rows: 1 }}
                    title={{ width: "50%" }}
                    className="loading-movie"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        );
      })}
    </>
  );
};
export default LoadingMovie;
