import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <>
      <div className={styles.demo1}>
        <div className={styles.item}>
          这是内容啊啊啊啊啊啊这是内容啊啊啊啊啊啊这是内容啊啊啊啊啊啊这是内容啊啊啊啊啊啊这是内容啊啊啊啊啊啊
        </div>
      </div>

      <div className={styles.demo2}>
        <ul>
          <li>视频</li>
          <li>音乐</li>
          <li>美食</li>
          <li>面包</li>
          <li>工作</li>
          <li>投资</li>
          <li>摄影</li>
        </ul>
      </div>

      <div className={styles.container}>
        <div className={styles.item}>item1</div>
        <div className={styles.item}>item2</div>
        <div className={styles.item}>item3</div>
        <div className={styles.item}>item4</div>
        <div className={styles.item}>item5</div>
        <div className={styles.item}>item6</div>
        <div className={styles.item}>item7</div>
        <div className={styles.item}>item8</div>
        <div className={styles.item}>item9</div>
        <div className={styles.item}>item10</div>
        <div className={styles.item}>item11</div>
      </div>
    </>
  );
};
