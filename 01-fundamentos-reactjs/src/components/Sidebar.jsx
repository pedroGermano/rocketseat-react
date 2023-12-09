import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://lh3.googleusercontent.com/a/ACg8ocI9lDZM1i4en6OGrvN9qVDeyVRVihio9KixEIyjsXVX9jPY=s288-c-no"
          alt="avatar picture"
        />

        <strong>Pedro Germano</strong>
        <span>Front-end engineer</span>
      </div>

      <footer>
        <a>
          <PencilLine style={{ marginRight: "0.5rem" }} size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
