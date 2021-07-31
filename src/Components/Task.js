import { FaTimes, FaBell } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() =>
		 onToggle(task._id)}>
			<h3>
				{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task._id)}/>
			</h3>
			<p style= {{color: 'grey'}}>{task.description}</p>
			<p>{task.owner} <FaBell onClick={() =>
		 onToggle(task._id)} style={ task.reminder ? { color: '#3D405B' } : { color: '#D8D9DD'}}/>   </p>
        </div>
		
    )
}

export default Task
