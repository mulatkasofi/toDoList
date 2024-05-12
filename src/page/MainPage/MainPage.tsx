import Creation from "../../components/Creation/Creation";
import TaskList from "../../components/TasksList/TasksList";

import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainPageWrap}>
      <div className={styles.mainPageContainer}>
        <Creation />
        <TaskList />
      </div>
    </div>
  );
};

export default MainPage;
