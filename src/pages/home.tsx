import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "@/entities/Header/header";

function Home(props) {
  let { id } = useParams();

  return (
    <div>
      <Header />
      <div><div>home { id }</div></div>
    </div>
  );
}

export default Home;