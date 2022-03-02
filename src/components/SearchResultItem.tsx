import React from "react";
import styles from "./SearchResultItem.module.css";
import {Gauge} from "./Gauge"

interface SearchResultItemProps {
    packageName: string;
    author: string;
    flags?: string;
    score: number;
    searchScore: number;
}

export function SearchResultItem(props: SearchResultItemProps) {

    const scoreInPercent = Math.round(props.score * 100)

    let flags = props.flags ? <div className={styles.flags}>{JSON.stringify(props.flags)}</div> : null;

    return(
        <div className={styles.packageWrapper}>
            {flags}
            <Gauge score={scoreInPercent}></Gauge>
            <h3>Package: <span className="orange">{props.packageName}</span></h3>
            <h4>Auteur: {props.author}</h4>
            <p>Score: {props.score}</p>
            <p>Search score: {props.searchScore}</p>
        </div>
    );
}
