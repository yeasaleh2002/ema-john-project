import {useEffect} from "react"
import {useState} from "react"

const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // return necessary things ---- jokon akadhik jinis return kora lage tokon full jinis ta array ar modde rakte hobe.
  return [products];

}


export default useProducts;