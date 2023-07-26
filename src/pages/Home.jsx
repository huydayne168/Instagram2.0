import React from "react";
import styles from "./Home.module.css";
import MainContent from "../utils/MainContent";
import MiddlePost from "../Components/HomeComponents/MiddlePost";
import RightContent from "../Components/HomeComponents/RightContent";

const Home = () => {
    return (
        <MainContent>
            <div className={styles["container"]}>
                <MiddlePost />
                <RightContent />
            </div>
        </MainContent>
    );
};

export default Home;
