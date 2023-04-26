export default function Modal(props) {
    return (
        <div className='modal'>
            <div className="loader"></div>
            {props.err && <p>{props.err}</p>}
        </div>
    )
}