import React from "react";
import styles from "./RightContent.module.css";

const RightContent = () => {
    const newFriendsArr = [
        "huydayne",
        "hadayne",
        "tuandayne",
        "loidayne",
        "datdayne",
    ];
    return (
        <div className={styles["right-side-bar"]}>
            <div className={styles["header"]}>
                <div className={styles["avatar"]}>
                    <img
                        src="https://i.pinimg.com/originals/b4/1a/04/b41a04050d7f84ee62d88f64484399ba.png"
                        alt="avatar"
                    />
                </div>
                <div className={styles["name-cotainer"]}>
                    <div className={styles["name"]}>HuyQuynh</div>
                    <div className={styles["real-name"]}>Phạm Diễm Quỳnh</div>
                </div>
                <div className={styles["btn"]}>Đổi</div>
            </div>
            <div className={styles["body"]}>
                <div className={styles["heading"]}>
                    <p>Gợi ý cho bạn</p>
                    <div className={styles["btn"]}>Tất cả</div>
                </div>
                <div className={styles["suggestion"]}>
                    <div className={styles["suggestion-list"]}>
                        {newFriendsArr.map((item) => {
                            return (
                                <div
                                    className={styles["suggestion-list__item"]}
                                >
                                    <div className={styles["avatar"]}>
                                        <img
                                            src="https://static.skills4school.de/uploads/2018/07/default-avatar-1024x780.png"
                                            alt="avatar"
                                        />
                                    </div>
                                    <div className={styles["desc"]}>
                                        <div className={styles["name"]}>
                                            {item}
                                        </div>
                                        <div className={styles["followed-by"]}>
                                            Followed by someone
                                        </div>
                                    </div>
                                    <div className={styles["btn"]}>Follow</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className={styles["footer"]}>
                <div className={styles["app-infor"]}>
                    <a href="#!">About</a>
                    <a href="#!">Help</a>
                    <a href="#!">Press</a>
                    <a href="#!">API</a>
                    <a href="#!">Jobs</a>
                    <a href="#!">Privacy</a>
                    <a href="#!">Terms</a>
                    <a href="#!">Locations</a>
                    <a href="#!">Language</a>
                    <a href="#!">Meta Verified</a>
                </div>

                <div className={styles["copy-right"]}>
                    © 2023 INSTAGRAM FROM Huydayne1608
                </div>
            </div>
        </div>
    );
};

export default RightContent;
