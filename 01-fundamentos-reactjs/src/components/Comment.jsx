import { Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  function handleDelete() {
    console.log('Botão Deletar')
  }

  return (
    <div className={styles.comment}>
       <Avatar hasBorder={false} src={'https://github.com/diego3g.png'} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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
