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
          <div>
            {post.artist_name ? <p>{post.artist_name}</p> : null}{" "}
            <p>{post.name}</p> <p>{post.post_count}</p>
          </div>
        ))}
      </div>
      <h1>{sectionTitle} views</h1>
      <div>
        {views.map((view: any) => (
          <div>
            {view.artist_name ? <p>{view.artist_name}</p> : null}{" "}
            <p>{view.name}</p> <p>{view.view_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCount;
