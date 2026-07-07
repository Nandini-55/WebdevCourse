import "./Lottery.css"
import TicketNum from "./TicketNum"
export default function Ticket({ ticket }){
    //Presentational component
    return <div className="Ticket">
    {ticket.map((val ,idx)=><TicketNum num={val} key={idx}/>)}
    </div>

}