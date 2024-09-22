import { useParams } from "react-router-dom";

const { useEffect, useState } = require("react");

export default function Detail() {

  const params = useParams();
 
 const [mascotas, setMascotas] = useState([]);
 useEffect(()=>{
     const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
     fetch(URL).then(data => data.json()).then(data => {
         setMascotas(data);
     })
 }, []);
 
 const mascota = {...mascotas[params.mascotaId-1]}
 console.log(mascota)
 
 return(
  <div>
  <h1>{mascota.nombre}</h1>
  <img src={mascota.foto} />
  <h1>{mascota.raza}</h1>
  </div>
 );
}