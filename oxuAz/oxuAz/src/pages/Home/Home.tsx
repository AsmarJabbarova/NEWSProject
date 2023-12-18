import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";
type Props = {};
import "./Home.scss";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { incrementLike } from "../../config/newsSlice";

type NewsItem = {
  id: number;
  date: string;
  time: string;
  img: string;
  title: string;
  like: number;
  disLike: number;
  watch: number;
};

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    axios
      .get<NewsItem[]>("http://localhost:3000/news")
      .then((res) => setNews(res.data));
  }, []);
  const dispatch = useDispatch();
  const handleFav = (itemId: number) => {
    dispatch(incrementLike(itemId));
  };
  return (
    <>
      <div className="containerr">
        <Container>
          <div className="slider">
            <Carousel>
              {news.map((item) => (
                <Carousel.Item key={item.id}>
                  <div className="sliderCard">
                    <div className="tarix">
                      <div className="date1">{item.date}</div>
                      <div className="date2">{item.time}</div>
                      <div className="date3">{item.watch}</div>
                    </div>
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="title">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="cardss">
            {news.map((item) => (
              <div className="card" key={item.id}>
                <div className="dates">
                  <div className="date1">{item.date}</div>
                  <div className="date2">{item.time}</div>
                </div>
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className="information">
                  <p>{item.title}</p>
                </div>
                <div className="stats">
                  <div
                    className="like"
                    onClick={() => {
                      handleFav(item.id);
                    }}
                  >
                    <AiTwotoneLike />
                    <p>{item.like}</p>
                  </div>
                  <div className="dislike">
                    <AiTwotoneDislike />
                    <p>{item.disLike}</p>
                  </div>
                  <div className="watch">
                    <IoIosEye />
                    <p>{item.watch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
