import React, { useState } from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import classNames from 'classnames/bind';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Header from '../components/Header';
// eslint-disable-next-line import/extensions,import/no-unresolved
import UserIntro from '../components/UserIntro';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from './PersonalAbout.module.scss';

const cx = classNames.bind(styles);

const currentUser = {
  id: '2-0-is',
  velog_name: '2-0-is_velog',
  username: '이영은',
  userImg: '',
  description: '이영은의 벨로그',
  github: '2-0-is',
  twitter: 'twitter',
  facebook: 'facebook',
  homepage: 'https://localhost:3000',
  mail: 'yuye2002@snu.ac.kr',
};

const detailedUser = {
  id: '2-0-is',
  velog_name: '2-0-is_velog',
  username: '이영은',
  userImg: '',
  description: '이영은의 벨로그',
  github: '2-0-is',
  twitter: 'twitter',
  facebook: 'facebook',
  homepage: 'https://localhost:3000',
  mail: 'yuye2002@snu.ac.kr',
  tags: ['tagA', 'tagB', 'tagC'],
  posts: [
    {
      id: 1,
      title: '포스트 제목입니다',
      author: currentUser,
      url: 'post-title-1',
      preview: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      tags: ['tagA', 'tagB', 'tagC'],
      created_at: '2022-12-30',
      updated_at: '2022-12-31',
      comments: 23,
      likes: 45,
      is_private: false,
    },
    {
      id: 2,
      title: '포스트 제목입니다',
      author: currentUser,
      url: 'post-title-2',
      preview: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      tags: ['tagA', 'tagB', 'tagC'],
      created_at: '2022-12-30',
      updated_at: '2022-12-31',
      comments: 23,
      likes: 45,
      is_private: false,
    },
    {
      id: 3,
      title: '포스트 제목입니다',
      author: currentUser,
      url: 'post-title-3',
      preview: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      tags: ['tagA', 'tagB', 'tagC'],
      created_at: '2022-12-30',
      updated_at: '2022-12-31',
      comments: 23,
      likes: 45,
      is_private: false,
    },
    {
      id: 4,
      title: '포스트 제목입니다',
      author: currentUser,
      url: 'post-title-4',
      preview: '포스트를 소개해주세요.',
      thumbnail: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      tags: ['tagA', 'tagB', 'tagC'],
      created_at: '2022-12-30',
      updated_at: '2022-12-31',
      comments: 23,
      likes: 45,
      is_private: true,
    },
  ],
  series: [
    {
      id: 1,
      title: '내 시리즈',
      photo: 'https://pbs.twimg.com/media/Ct9Zp2UVYAAcnEt.jpg',
      created_at: '2022-12-30',
      updated_at: '2022-12-31',
      authorId: '2-0-is',
      postNum: 12,
    },
  ],
  about: '<h1>내 벨로그입니다.</h1>',
};

function PersonalAbout() {
  const loginUser = useState(false);
  return (
    <div className={cx('page')}>
      <Header />
      <div className={cx('pageContent')}>
        <UserIntro userInfo={currentUser} />
        <div>
          <div className={cx('pageIndex')}>
            <a href={`/@${currentUser.id}`} className={cx('index')}>
              글
            </a>
            <a href={`/@${currentUser.id}/series`} className={cx('index')}>
              시리즈
            </a>
            <a
              href={`/@${currentUser.id}/about`}
              className={cx('index', 'active')}
            >
              소개
            </a>
            <div className={cx('activeLine')} />
          </div>
        </div>
        <div>
          {detailedUser.about === '' && (
            <div className={cx('empty')}>
              <img
                src="https://static.velog.io/static/media/undraw_empty.5fd6f2b8.svg"
                alt="empty about"
              />
              <div className={cx('message')}>소개가 작성되지 않았습니다.</div>
              {loginUser && (
                <button type="button" color="teal" className={cx('addIntro')}>
                  소개 글 작성하기
                </button>
              )}
            </div>
          )}
          {detailedUser.about !== '' && (
            <div className={cx('intro')}>{detailedUser.about}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalAbout;
