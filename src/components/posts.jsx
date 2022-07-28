import React from "react";
import queryString from "query-string";

// const Posts = (props) => {
const Posts = ({match, location}) => {

  const result = queryString.parse(location.search);
  // const {sortBy} = queryString.parse(location.search);
  console.log(result);

  return (  
    <div>
      <h1>Posts</h1>
      {/*  Year: {props.match.params.year}, Month:{props.match.params.month} */}
      Year: {match.params.year}, Month:{match.params.month}
    </div>
  );
};

export default Posts;
