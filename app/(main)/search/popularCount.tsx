import React from "react";

const PopularCount = ({
  sectionTitle,
  views,
  posts,
}: {
  sectionTitle: string;
  views: any[];
  posts: any[];
}) => {
  return (
    <div>
      <h1>{sectionTitle} posts</h1>
      <div>
        {posts.map((post: any) => (
          <div className="flex flex-row justify-between mt-2">
            <p className="basis-1/2">{post.name}</p>
            {post.artist_name ? (
              <p className="basis-1/2">{post.artist_name}</p>
            ) : null}
            <p className="basis-1/6 text-right">
              {post.post_count}
            </p>
          </div>
        ))}
      </div>
      <h1>{sectionTitle} views</h1>
      <div>
        {views.map((view: any) => (
          <div className="flex flex-row justify-between mt-2">
            <p className="basis-1/2">{view.name}</p>
            {view.artist_name ? (
              <p className="basis-1/2">{view.artist_name}</p>
            ) : null}
            <p className="basis-1/6 text-right">
              {view.view_count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCount;
