export default function ServerInfo(){
    const serverTime = new Date().toLocaleTimeString();
    return(
        <div>
            <h2>Server Time: {serverTime}</h2>
        </div>
    )
}