import NextLink from 'next/link';
import { useRouter } from 'next/navigation'



const Link = ({href, text}) => {

    const handleClick = () =>{
        const Router = useRouter()
        Router.push("/Registro")
    }

    return (
        <button onClick={() => handleClick()}>{text}</button>
    )
}

export default Link