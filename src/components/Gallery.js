import "./Gallery.css"
import Card from "./Card";
import {useEffect, useState} from "react";
import {getCharakters} from "../services/ApiService";

export default function Gallery(props){
        const [chars, setChars] = useState()

        useEffect(() => {
                setupChars().catch(e => console.log(e.message()))
        }, [])

        const setupChars = () => getCharakters().then(data => setChars(data.results))

        if(!chars){
                return<div className="gallery">
                        <h1>loading...</h1>
                </div>
        }

    return(
        <div className="gallery">
                {chars.map(char => (
                    <Card
                        key = {char.id}
                        image = {char.image}
                        name = {char.name}
                        status = {char.status}
                        species = {char.species}
                        origin = {char.location.name}
                    />
                ))}
        </div>)
}