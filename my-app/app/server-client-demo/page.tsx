import ServerInfo from "../components/ServerInfo"
import Counter from "../components/Counter"

export default function ServerClientDemo(){
    return(
        <div style={{padding: "20px"}}>
            <h1>Server Client Demo</h1>
            <ServerInfo />
            <Counter />
        </div>
    )
}