import React from "react"
import { useParams } from "react-router-dom";
import { PackageService } from "../services";

import styles from "./PackageDetails.module.css";

export function PackageDetails() {

    const params = useParams();

    const [packageDetails, setPackageDetails] = React.useState(null)

    React.useEffect( () => {
        console.log('use effect called')
        const packageName = params.packageName

        if(packageName) {
            PackageService.getDetails(packageName)
                .then(details => setPackageDetails(details.data))
                .catch(error => console.log(error))
        }

        return function() {
            console.log('component is about to unmount')
        }
    }, [])

    const JsonString = packageDetails ? <div className={styles.div}>{JSON.stringify(packageDetails)}</div> : null
    
    return <section> {JsonString} </section>
}