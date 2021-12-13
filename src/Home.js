import React from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {data,isPending,error} = useFetch("http://localhost:9090/blogs");

    return (
        <div className="Home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading</div>}
          {data && <BlogList blogs={data} title = "All blogs" ></BlogList>}
        </div>
      );
}
 
export default Home;


