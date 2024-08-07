import { useParams } from "react-router-dom"

export function Room() {
    const { roomid} = useParams()

    console.log(roomid)

    return (
        <h1>Room: {roomid}</h1>
    )
}