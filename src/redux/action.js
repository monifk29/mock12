import * as types from "./actionTypes";

import axios from "axios";

const getArticleReq = () => {
  return {
    type: types.GET_ARTICLES_REQ
  };
};

const getArticleSuccess = (payload) => {
  return {
    type: types.GET_ARTICLES_SUCCESS,
    payload,
  };
};

const getArticleFail = () => {
  return {
    type: types.GET_ARTICLES_FAIL,
  };
};



const getData = (page_no) => {
    return(dispatch) => {
        dispatch(getArticleReq());
        axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${page_no}`).then((res) => dispatch(getArticleSuccess(res.data))).catch((e) => dispatch(getArticleFail()))

    }
}


  export {getData}