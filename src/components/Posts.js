import React from "react";
import {
  CommentOutlined,
  ShareAltOutlined,
  HeartOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="container">
      {posts.map((post) => (
        <div>
          <div class="post">
            <div class="post__avatar">
              <img src={post.profilePicture} alt="" />
            </div>

            <div class="post__body">
              <div class="post__header">
                <div class="post__headerText">
                  <h3>
                    {post.profileName}
                    <span class="post__headerSpecial">
                      {` @${post.userName}`}
                    </span>
                  </h3>
                </div>
                <div class="post__headerDescription">
                  <p>{`#${post.hashtext}`}</p>
                  <p>{post.normaltext}</p>
                </div>
              </div>
              <img src={post.image} alt="" />
              <div class="post__footer">
                <span className="icon">
                  <CommentOutlined />
                </span>
                <span>
                  <ShareAltOutlined />
                </span>
                <span className="icon-number">
                  <span>
                    <HeartOutlined />
                  </span>
                  <span className="number"> {post.likes}</span>
                </span>
                <span>
                  <ExportOutlined />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
