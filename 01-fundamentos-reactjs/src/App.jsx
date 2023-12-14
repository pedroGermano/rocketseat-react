import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro Germano"
            content="lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          />

          <Post
            author="Diego Feranandes"
            content="lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          />

        </main>
      </div>
    </>
  );
}
