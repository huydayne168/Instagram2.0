import React from "react";
import styles from "./SearchBar.module.css";
const SearchBar = () => {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["heading"]}>
                <h2>Tìm kiếm</h2>
            </div>
            <div className={styles["search-input"]}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Tìm kiếm"
                />
            </div>
            <div className={styles["latest-search"]}>
                <div className={styles["heading"]}>
                    <p>Gần đây</p>
                    <div className={styles["btn"]}>Xóa tất cả</div>
                </div>
                <div className={styles["body"]}>
                    <div className={styles["search-list__item"]}>
                        <div className={styles["avatar"]}>
                            <img
                                src="https://i.pinimg.com/236x/ea/77/1a/ea771a1d4d83b0f61660194fa579619a.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className={styles["desc"]}>
                            <div className={styles["name"]}>pdqn_n</div>
                            <div className={styles["real-name"]}>
                                Phạm Diễm Quỳnh
                            </div>
                        </div>
                        <div
                            className={`${styles["del-btn"]} ${styles["btn"]}`}
                        >
                            <svg
                                aria-label="Đóng"
                                className="x1lliihq x1n2onr6"
                                color="rgb(142, 142, 142)"
                                fill="rgb(142, 142, 142)"
                                height="16"
                                role="img"
                                viewBox="0 0 24 24"
                                width="16"
                            >
                                <title>Đóng</title>
                                <polyline
                                    fill="none"
                                    points="20.643 3.357 12 12 3.353 20.647"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                ></polyline>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    x1="20.649"
                                    x2="3.354"
                                    y1="20.649"
                                    y2="3.354"
                                ></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
