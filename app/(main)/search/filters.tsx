"use client";
import React, { useState } from "react";
import ThumbnailContainer from "./thumbnailContainer";
import PopularCount from "./popularCount";
const Filters = ({ data, token }: { data: any; token: string }) => {
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
  const [selectedInstruments, setSelectedInstruments] = useState<any[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<any[]>([]);
  const [displayContent, setDisplayContent] = useState<any[]>(last_posts);

  const renderSearchButton = (title: string, count: number) => (
    <h1
      onClick={() => changeSection(title)}
      className={`text-center text-${
        title == display ? "green-500" : "red-500"
      } border-2 p-1 rounded-lg cursor-pointer`}
    >
      {title} {count}
    </h1>
  );

  const changeSection = (title: string) => {
    switch (title) {
      case "posts":
        setDisplayContent(last_posts);
        break;
      case "users":
        setDisplayContent(last_users);
        break;
      case "bands":
        setDisplayContent(last_bands);
        break;
    }
    setSelectedGenres([]);
    setSelectedInstruments([]);
    setDisplay(title);
  };

  const renderSearchOptions = () => (
    <div className="container flex justify-between p-4">
      {renderSearchButton("posts", post_count)}
      {renderSearchButton("users", user_count)}
      {renderSearchButton("bands", band_count)}
      {renderSearchButton("songs", song_count)}
      {renderSearchButton("artists", artist_count)}
    </div>
  );

  const getFilteredData = (instruments: any, genres: any) => {
    fetch(`http://localhost:3000/${display}filtersearch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        instruments: instruments,
        genres: genres,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (!resp.length) {
          changeSection(display);
        } else {
          setDisplayContent(resp);
        }
      });
  };

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
          {filters.map((item: any) => renderInstrumentButton(item))}
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
          {post_genre_filters.map((item: any) => renderGenreButton(item))}
        </div>
      </div>
    );
  };

  const selectInstrument = (inst: number) => {
    let updatedInstruments;
    if (selectedInstruments.includes(inst)) {
      updatedInstruments = selectedInstruments.filter(
        (instrument) => instrument != inst
      );
      setSelectedInstruments(updatedInstruments);
    } else {
      updatedInstruments = [...selectedInstruments, inst];
      setSelectedInstruments(updatedInstruments);
    }
    getFilteredData(updatedInstruments, selectedGenres);
  };

  const selectGenre = (genre: number) => {
    let updatedGenres;
    if (selectedGenres.includes(genre)) {
      updatedGenres = selectedGenres.filter((genr) => genr != genre);
      setSelectedGenres(updatedGenres);
    } else {
      updatedGenres = [...selectedGenres, genre];
      setSelectedGenres(updatedGenres);
    }
    getFilteredData(selectedInstruments, updatedGenres);
  };
  const renderGenreButton = (item: any) => (
    <h1
      onClick={() => selectGenre(item.id)}
      key={item.id}
      className={`text-center ${
        selectedGenres.includes(item.id) ? "text-red-500" : "text-green-500"
      }
    border-2 p-1 rounded-lg cursor-pointer`}
    >
      {item.name}
    </h1>
  );

  const renderInstrumentButton = (item: any) => (
    <h1
      onClick={() => selectInstrument(item.id)}
      key={item.id}
      className={`text-center ${
        selectedInstruments.includes(item.id)
          ? "text-red-500"
          : "text-green-500"
      }
    border-2 p-1 rounded-lg cursor-pointer`}
    >
      {item.name}
    </h1>
  );
  return (
    <div className="w-2/4">
      {renderSearchOptions()}
      {display === "songs" || display === "artists" ? null : (
        <>
          {renderInstrumentsSection()}
          {renderGenresSection()}
        </>
      )}
      {display === "posts" ? (
        <ThumbnailContainer list={displayContent} type={"thumbnail"} />
      ) : null}
      {display === "users" ? (
        <ThumbnailContainer list={displayContent} type={"avatar"} />
      ) : null}
      {display === "bands" ? (
        <ThumbnailContainer list={displayContent} type={"picture"} />
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
