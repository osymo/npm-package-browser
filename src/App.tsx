import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchService } from './services';
import { SearchResultType } from './types';
import {SearchResultItem, Navbar} from './components'


const packageList = [
  {
    name: 'React',
    author: 'Facebook'
  },
  {
    name: 'Angular',
    author: 'Google'
  },
  {
    name: 'Sendtext',
    author: 'Omar'
  },
  {
    name: 'ImmoAfrica',
    author: 'Omar'
  },
  {
    name: 'SenWork',
    author: 'Omar'
  },
]

function App() {
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
    console.log(searchResult)
    resultList =   <section>
                      {
                        searchResult.results.map(r => 
                            <SearchResultItem packageName={r.package.name} 
                                              author={r.package.author?.name}
                                              flags={r.flags}
                                              score={r.score.final}
                                              searchScore={r.searchScore}
                                              key={r.package.links.npm}           
                              />)
                      }
                    </section>
  }

  return (
    <div className="App">
      <header><Navbar></Navbar></header>

      <main>
        <h1>Trouver votre <span className="orange">package npm </span></h1>
        <div className="input-wrapper">
          <input type="text" value={searchTerm} onChange={handleSearchTermChange}/>
          <button onClick={handleSearch}>Chercher</button>
        </div>
        {resultList}
      </main>
    </div>
  );
}

export default App;
