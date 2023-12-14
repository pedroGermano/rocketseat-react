import { Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocI9lDZM1i4en6OGrvN9qVDeyVRVihio9KixEIyjsXVX9jPY=s288-c-no"
        alt="avatar"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Germano</strong>
              <time>Cerda de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
