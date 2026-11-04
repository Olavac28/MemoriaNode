export default function Card(props: any) {
    return (
        <div className="border-red-600 border">{props.produto}  {props.preço}</div>
    )
}