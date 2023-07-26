import React from "react";
import styles from "./NotificationBar.module.css";
const NotificationBar = () => {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["heading"]}>
                <h2>Thông báo</h2>
            </div>

            <div className={styles["body"]}>
                <h3>Bạn chưa có thông báo nào</h3>
            </div>
        </div>
    );
};

export default NotificationBar;
