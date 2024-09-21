import { useParams } from "react-router-dom";
import { Mascotas } from './mascotas'
export default function Detail() {
 const params = useParams();
 const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
 const mascota = fetch(URL)
 .then(data => data.json())
 .then();
 return (
   <div>
     <h1>{params.mascotaId}</h1>
   </div>
 );
}