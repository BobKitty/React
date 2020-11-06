import React from 'react';
import styles from './cardtextcontent.scss';

export function CardTextContent() {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
                className={styles.avatar}
                src="https://static.dribbble.com/users/79914/avatars/normal/38b3d01a69225d153348419d0e00cd5e.jpg?1542055947"
                alt="avatar"
            />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.cratedAt}>
            <span className={styles.publishedLabel}>опубликовано&nbsp;</span>
            4 часа назад
          </span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности
          </a>
        </h2>
      </div>
  );
}
