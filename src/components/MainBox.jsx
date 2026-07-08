import React, { useEffect, useState } from 'react'
import Style from '../css/MainBox.module.css'
import { useNavigate } from 'react-router-dom'

const MainBox = () => {

  const [state, setState] = useState([]);
  const navigate = useNavigate();

  async function apiData() {
    const params = {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 9,
      regionCode: "IN",
      key: import.meta.env.VITE_YOUTUBE_API_KEY
    }

    let fetchdata = fetch(
      `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(params)}`
    );

    console.log(fetchdata);

    let res = await fetchdata;
    let data = await res.json();

    console.log(data.items);

    setState(data.items);

    console.log(import.meta.env.VITE_YOUTUBE_API_KEY);
  }

  useEffect(() => {
    apiData();
  }, []);

  return (
    <main className={Style.main}>

      {state?.map((data) => (
        <article
          key={data.id}
          className={Style.article}
          onClick={() => navigate(`/video/${data.id}`)}
          style={{ cursor: "pointer" }}
        >
          <div>
            <img
              src={data.snippet.thumbnails.standard.url}
              alt={data.snippet.title}
            />
          </div>

          <div>
            <h2>{data.snippet.title}</h2>
          </div>

          <div>
            <h3>{data.snippet.channelTitle}</h3>
          </div>
        </article>
      ))}

    </main>
  );
}

export default MainBox;