import clsx from 'clsx';


export const TodoItem = ({ status, label }) => {

    return (<div className="p-4 flex items-center">
        <span className="w-full block">{label}</span>
        <input checked={status !== 'open'} type="checkbox" className="rounded text-pink-500 ml-8"  />
        </div>)
}

