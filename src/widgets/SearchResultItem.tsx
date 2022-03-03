import React from "react";
import {useNavigate } from "react-router-dom";

import styles from "./SearchResultItem.module.css";
import {Gauge} from "./Gauge"

interface SearchResultItemProps {
    packageName: string;
    author: string;
    flags?: string;
    score: number;
    searchScore: number;
    quality: number;
    popularity: number;
    maintenance: number;
    description: string;
}

export function SearchResultItem(props: SearchResultItemProps) {

    const navigate = useNavigate();

    const scoreInPercent = Math.round(props.score * 100)

    let flags = props.flags ? <div className={styles.flags}>{JSON.stringify(props.flags)}</div> : null;

    const handleItemClick = (packageName: string) => navigate('packages/'+packageName)

    return(
        <div className={styles.packageWrapper} onClick={ () => handleItemClick(props.packageName)}>
            {flags}
            <h3><span className="orange">{props.packageName}</span></h3>
            <span className={styles.size14}>{props.description}</span>
            <h5><span className="grey">Auteur:</span> {props.author}</h5>
            <p className={styles.size12}>Quality: {props.quality}</p>
            <p className={styles.size12}>Popularity: {props.popularity}</p>
            <p className={styles.size12}>Maintenance: {props.maintenance}</p>
            <Gauge score={scoreInPercent}></Gauge>
        </div>
    );
}
