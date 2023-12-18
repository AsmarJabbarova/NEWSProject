import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";
type Props = {};
import "./SouBiznes.scss";
import axios from "axios";

type NewsItem = {
  id: number;
  date: string;
  time: string;
  img: string;
  title: string;
  like: number;
  disLike: number;
  category: string;
  watch: number;
};

const Siyaset: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    axios
      .get<NewsItem[]>("http://localhost:3000/news")
      .then((res) => setNews(res.data));
  }, []);

  return (
    <>
      <Container>
        <div className="cardss">
          {news.map((item) => {
            if (item.category === "sou-biznez") {
              return (
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
                        // handleFav(item.id);
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
              );
            }
          })}
        </div>
      </Container>
    </>
  );
};

export default Siyaset;
