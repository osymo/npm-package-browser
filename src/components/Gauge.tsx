import React from "react";
import styles from "./Gauge.module.css";

interface GaugeProps {
    score: number;
}

export function Gauge({score}: GaugeProps) {
    const cssClasses = [styles.gaugeWrapper]
    if(score < 50)
        cssClasses.push(styles.weak)
    else if(score < 80)
        cssClasses.push(styles.mean)
    else 
        cssClasses.push(styles.good)

    return <div className={cssClasses.join(' ')}>{score}%</div>
}