import {useState, useEffect} from "react";
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Header from "./Component/Header";
import Category from "./Component/Category";
import PopularWeek from "./Component/PopularWeek";
import './App.css';
import ChefDetail from "./Component/ChefDetail";
import CarouselView from "./Component/CarouselView";
import Footer from "./Component/Footer"


function App() {

  const [data, setData] = useState({});
  

  const getApiData = () => {
    const apiURL ="http://63.142.251.101:3000/homepage";
    axios.post(apiURL).then((res) => {
      console.log("response", res.data.data)
      setData(res.data.data)
      
    }).catch((err) => {
      console.log("err", err)
    })
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    <Header />
    <Category />
    {data.popularweek && <PopularWeek popularweek={data.popularweek}/>}
    <ChefDetail/>
    <CarouselView title="Explore Mexican Dishes"/>
    <CarouselView title="Explore Indian Dishes"/>
    <CarouselView title="Explore Italian Dishes"/>
    <Footer/>
    
    </>
  );
};

export default App;
