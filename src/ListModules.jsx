import React from 'react';
import { connect } from 'react-redux';
import { deleteModule, updateNote } from './Action.jsx';
const ListModules = ({ modules, deleteModule, updateNote }) => {
    const handleDeleteModule = (moduleId) => {
        deleteModule(moduleId);
    };
    const handleUpdateNote = (moduleId, newNote) => {
        const updatedNote = prompt('Enter new note:', newNote);
        if (updatedNote !== null) {
            updateNote(moduleId, parseInt(updatedNote, 10));
        }
    };
    return (
        <div>
            <h2 className='text-3xl text-black font-bold p-4'>List of Modules:</h2>
            <table className="border-separate border w-[100%] border-black">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-[#ebebeb]'>
                    {modules.map((module) => (
                        <tr key={module.id}>
                            <td className="border p-2 border-black text-center">{module.id}</td>
                            <td className="border p-2 border-black text-center ">{module.title}</td>
                            <td className="border p-2 border-black text-center ">{module.category}</td>
                            <td className="border p-2 border-black text-center ">{module.note}</td>
                            <td className="border p-2 border-black text-center ">
                                <button onClick={() => handleUpdateNote(module.id, module.note)} className='p-2 bg-yellow-400 hover:bg-yellow-300'>Update Note</button>
                                <button onClick={() => handleDeleteModule(module.id)} className='p-2 bg-red-600 hover:bg-red-700'>Delete Module</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        modules: state.modules,
    };
};
export default connect(mapStateToProps, { deleteModule, updateNote })(ListModules);
