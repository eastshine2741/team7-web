import React from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import classNames from 'classnames/bind';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from './BigPostComp.module.scss';

const cx = classNames.bind(styles);

interface post {
  id: number;
  title: string;
  url: string;
  intro: string;
  thumbnail: string;
  seriesTitle: string;
  seriesId: number;
  tags: string[];
  date: string;
  comments: number;
  authorId: string;
  authorImg: string;
  heart: number;
  public: boolean;
}

type post_type = {
  postInfo: post;
  username: string;
};

function BigPostComp({ postInfo, username }: post_type) {
  return (
    <div className={cx('postDiv')}>
      {username === '' && (
        <div className={cx('userInfo')}>
          <a href={`/@${postInfo.authorId}`}>
            <img src={postInfo.authorImg} alt="thumbnail" />
          </a>
          <div className={cx('username')}>
            <a href={`/@${postInfo.authorId}`}>{postInfo.authorId}</a>
          </div>
        </div>
      )}
      <a href={`/@${postInfo.authorId}/${postInfo.title}`}>
        <div className={cx('thumbnail')}>
          <img src={postInfo.thumbnail} alt="post-thumbnail" />
        </div>
      </a>
      <a href={`/@${postInfo.authorId}/${postInfo.title}`}>
        <h2>{postInfo.title}</h2>
      </a>
      <p>{postInfo.intro}</p>
      <div className={cx('tagWrapper')}>
        {postInfo.tags.map((tag: string) => (
          <a href={`/tags/${tag}`} className={cx('tag')}>
            {tag}
          </a>
        ))}
      </div>
      <div className={cx('subInfo')}>
        <span>{postInfo.date}</span>
        <span className={cx('dot')}>·</span>
        <span>{postInfo.comments}개의 댓글</span>
        <span className={cx('dot')}>·</span>
        <span className={cx('likes')}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
            />
            {postInfo.heart}
          </svg>
        </span>
        {!postInfo.public && <span className={cx('dot')}>·</span>}
        {!postInfo.public && (
          <span>
            <div className={cx('secret')}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.625 9H16.5V6.81c0-2.47-1.969-4.522-4.44-4.56a4.514 4.514 0 0 0-4.56 4.5V9H6.375A1.88 1.88 0 0 0 4.5 10.875v9a1.88 1.88 0 0 0 1.875 1.875h11.25a1.88 1.88 0 0 0 1.875-1.875v-9A1.88 1.88 0 0 0 17.625 9zm-4.969 5.85v3.225a.672.672 0 0 1-.623.675.657.657 0 0 1-.69-.656V14.85a1.5 1.5 0 0 1-.838-1.486 1.5 1.5 0 1 1 2.152 1.486zM15.187 9H8.814V6.75c0-.848.332-1.645.937-2.25A3.16 3.16 0 0 1 12 3.562a3.16 3.16 0 0 1 2.25.938 3.16 3.16 0 0 1 .938 2.25V9z"
                />
              </svg>{' '}
              비공개
            </div>
          </span>
        )}
      </div>
    </div>
  );
}

export default BigPostComp;