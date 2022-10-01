import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import Card from "./Card";
 

import styles from "../styles/Article.module.css";
import TopComment from "./TopComment";

const Article = () => {
  const [page, setPage] = useState(1);
  

  const articleData = useSelector((state) => state.article.data);

  const dispatch = useDispatch();

  const [sort, setSort] = useState(articleData);
  const [date,setDate] = useState();


  const topComment = () => {
   
  }


  const handleSort =  () => {

    if(date == "asc"){
      let sort = articleData.sort((a, b) => {
          return a.created_at - b.created_at;
        });
    
        setSort([...sort]);
  }

  if(date == "desc"){
    let sort = articleData.sort((a, b) => {
        return b.created_at - a.created_at;
      });
  
      setSort([...sort]);
}

  }

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page <= 4) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(getData(page));
  }, [page]);

  console.log(articleData);

  return (

    <div className={styles.contain}>
      <select  onChange={(e) => setDate(e.target.value)} onClick={handleSort}>
        <option>None</option>
        <option value="desc">Latest to Old</option>
        <option value="asc">Old to Latest</option>
      </select>

      {/* <button onClick={topComment}>Top Comment</button> */}

      <div className={styles.pageBtns}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div className={styles.main}>
        {articleData?.map((e) => (
          <div>
            <Card {...e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
