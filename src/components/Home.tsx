import React from 'react';

import { Link } from "react-router-dom";
import styles from './Home.module.css';
import { SearchService } from '../services';
import { SearchResultType } from '../types';
import { SearchResultItem } from '../widgets'


export function Home() {
  const searchLimit = 50
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResult, setSearchResult] = React.useState<SearchResultType>()
  const [searchCursor, setSearchCursor] = React.useState(0)

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    SearchService.search(searchTerm, searchCursor, searchLimit)
      .then(sr => setSearchResult(sr.data))
      .catch(err => console.log(err))
  }

  let resultList = null;

  if(searchResult) {

    resultList =   <div className={styles.searchResultWrapper}>
                      {
                        searchResult.results.map(r => 
                            <SearchResultItem packageName={r.package.name} 
                                              author={r.package.author?.name}
                                              flags={r.flags}
                                              score={r.score.final}
                                              searchScore={r.searchScore}
                                              popularity={r.score.detail.popularity}
                                              quality={r.score.detail.quality}
                                              maintenance={r.score.detail.maintenance}
                                              description={r.package.description}
                                              key={r.package.links.npm}           
                              />)
                      }
                    </div>
  }

  return (
    <div className="App">
      <section>
        <h1>Trouver votre <span className="orange">package npm </span></h1>
        <div className={styles.inputWrapper}>
          <input type="text" value={searchTerm} onChange={handleSearchTermChange}/>
          <button onClick={handleSearch}>Chercher</button>
        </div>
        {resultList}
      </section>
    </div>
  );
}