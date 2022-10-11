import Image from "next/image"

const dessertBackground = "https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"


export default function Dessert(){
    return (
        <>
            <Image src={dessertBackground} alt="some pieces of blueberry cake" layout="responsive" width={2400} height={1599}/>
            <h2>Desserts</h2>
            <p>Nice and sweet.</p>
        </>
    )
}
