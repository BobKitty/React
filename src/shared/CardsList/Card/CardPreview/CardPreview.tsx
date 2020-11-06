import React from 'react';
import styles from './cardpreview.scss';

export function CardPreview() {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src="https://static.dribbble.com/users/1090020/screenshots/14168493/a1143df6-e16c-4bf7-86e2-7f2892c53502.png"
        />
      </div>
  );
}
