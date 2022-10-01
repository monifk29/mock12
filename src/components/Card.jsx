import React from "react";
import styles from "../styles/Card.module.css"

const Card = (e) => {
  return (
    <div className={styles.container}>

      <div id="top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU" alt="avatar_img" />
        <h3>{e.author}</h3>
      </div>

    <p className={styles.title}>{e.title}</p>

    <div className={styles.bottom}>
        <p>No. of Comments <span style={{color : "red" ,textDecoration : "underline"}}>{e.num_comments}</span></p>

        <a href={e.url}>Go to Article</a>
    </div>

    <div className={styles.createdAt}>Created at : {e.created_at}</div>

    </div>
  );
};

export default Card;
