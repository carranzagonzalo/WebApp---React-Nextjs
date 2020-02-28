import React from 'react'
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import fetch from "isomorphic-unfetch";


export default function buscar(props) {
  const { buscar } = props;

  const router = useRouter();
  const { query: { q }} = router;

   

  return (
    <div>
      <Layout>
      <h1 style={{ textAlign: "center" }}>
        Noticias
      </h1>
      </Layout>
    </div>
  );
}



buscar.getInitialProps = async () => {
  const res = await fetch("https://api-test-ln.herokuapp.com/articles");
  const buscar = await res.json();




  return { buscar };
};


// const Buscar = () => {

//   const router = useRouter();
//   const { query: { q }} = router;


//   return (
//     <div>
//       <Layout>
//       <h1>Noticias</h1>
//       </Layout>
//     </div>
//   )
// }

// export default Buscar