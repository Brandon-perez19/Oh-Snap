import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
        name: 'commercial',
        description: "Photos of gtocery stores, food trucs, and other commercial projects",
    },
    {
        name: "potraits",
        description: "Potraits of people in my life",
    },
    {
        name: "food",
        description: "Delicious delicacies"
    },
    {
        name: "landscape",
        description: "fields, farmhouses, waterfalls, and the beauty of nature",
    },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory = {currentCategory}
        > </Nav>
      <main>
        <Gallery />
        <About />
      </main>
    </div>
  );
}

export default App;
