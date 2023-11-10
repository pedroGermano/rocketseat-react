import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://lh3.googleusercontent.com/a/ACg8ocI9lDZM1i4en6OGrvN9qVDeyVRVihio9KixEIyjsXVX9jPY=s288-c-no"
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Germano</strong>
            <span>Front-end engineer</span>
          </div>
        </div>

        <time dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>
      <div className={styles.content}></div>
    </article>
  );
}
