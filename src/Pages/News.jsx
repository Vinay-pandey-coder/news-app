import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { Loader2 } from "lucide-react";

const News = ({country,category,articles,setArticles}) => {

  const [loading,setLoading] = useState(false)

  const fetchAllNews = async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      setArticles(res.data.articles)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };


  useEffect(()=>{
    fetchAllNews()
  },[category])

  return (
    <>
      {
        loading ?  <div className='bg-gray-200 dark:bg-gray-800 h-screen flex flex-col gap-3 items-center justify-center'>
          <Loader2 className='h-12 w-12 animate-spin dark:text-gray-200' />
        <h1 className='text-gray-800 text-xl font-semibold dark:text-gray-200'>Loading...</h1>
        </div> :       
        <div className="h-full bg-gray-200 dark:bg-gray-800 py-24 px-4 md:px-0">
          <div className="max-w-7xl mx-auto grid gap-7 grid-cols-1 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 xl:grid-cols-4">
          {
            articles.map((article,index)=>{
              return <NewsCard key={index} article={article}/>
            })
          }
        </div>
      </div>
      }
    </>
  );
};

export default News;
