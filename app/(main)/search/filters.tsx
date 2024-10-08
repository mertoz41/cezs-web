"use client";
import React, { useState } from "react";
import ThumbnailContainer from "./thumbnailContainer";
import PopularCount from "./popularCount";
const Filters = ({ data }: { data: any }) => {
  const {
    post_instrument_filters,
    post_genre_filters,
    account_instrument_filters,
    account_genre_filters,
    post_count,
    user_count,
    band_count,
    song_count,
    artist_count,
    last_posts,
    last_users,
    last_bands,
    artist_views,
    artist_posts,
    song_posts,
    song_views,
  } = data;

  const [display, setDisplay] = useState<string>("posts");
  const renderSearchButton = (title: string, count: number) => (
    <h1
      onClick={() => setDisplay(title)}
      className={`text-center text-${
        title == display ? "green-500" : "red-500"
      } border-2 p-1 rounded-lg cursor-pointer`}
    >
      {title} {count}
    </h1>
  );

  const renderSearchOptions = () => (
    <div className="container flex justify-between p-4">
      {renderSearchButton("posts", post_count)}
      {renderSearchButton("users", user_count)}
      {renderSearchButton("bands", band_count)}
      {renderSearchButton("songs", song_count)}
      {renderSearchButton("artists", artist_count)}
    </div>
  );

  const renderInstrumentsSection = () => {
    let filters;
    if (display == "posts") {
      filters = post_instrument_filters;
    } else {
      filters = account_instrument_filters;
    }
    return (
      <div>
        <h1>instruments</h1>
        <div className="container flex justify-between p-4">
          {filters.map((item: any, i: number) => renderMusicButton(item, i))}
        </div>
      </div>
    );
  };
  const renderGenresSection = () => {
    let filters;
    if (display == "posts") {
      filters = post_genre_filters;
    } else {
      filters = account_genre_filters;
    }
    return (
      <div>
        <h1>genres</h1>
        <div className="container flex justify-between p-4">
          {post_genre_filters.map((item: any, i: number) =>
            renderMusicButton(item, i)
          )}
        </div>
      </div>
    );
  };
  const renderMusicButton = (item: any, i: number) => (
    <h1
      key={i}
      className={`text-center text-red-500
    border-2 p-1 rounded-lg cursor-pointer`}
    >
      {item.name}
    </h1>
  );
  return (
    <div className="w-1/3">
      {renderSearchOptions()}
      {display === "songs" || display === "artists" ? null : (
        <>
          {renderInstrumentsSection()}
          {renderGenresSection()}
        </>
      )}
      {display === "posts" ? (
        <ThumbnailContainer list={last_posts} type={"thumbnail"} />
      ) : null}
      {display === "users" ? (
        <ThumbnailContainer list={last_users} type={"avatar"} />
      ) : null}
      {display === "bands" ? (
        <ThumbnailContainer list={last_bands} type={"picture"} />
      ) : null}
      {display === "songs" ? (
        <PopularCount
          sectionTitle="songs"
          views={song_views}
          posts={song_posts}
        />
      ) : null}
      {display === "artists" ? (
        <PopularCount
          sectionTitle="artists"
          views={artist_views}
          posts={artist_posts}
        />
      ) : null}
    </div>
  );
};

export default Filters;
