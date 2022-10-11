import Image from "next/image"
import pizzaBackground from "../public/pizza-background.jpg"


export default function Veggie(){
    return (
        <>
            <Image src={pizzaBackground} alt="Sliced veggie pizza" layout="responsive"/>
            <h2>Veggie</h2>
            <p>May the animals live long and prosper.</p>
        </>
    )
}