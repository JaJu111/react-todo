export default function Button({ children, onClick, isActive }) {
    return (
        <button 
            className={isActive ? 'btn btn-primary' : 'btn'}
            onClick={onClick}
        >
            { children }
        </button>
    )
}