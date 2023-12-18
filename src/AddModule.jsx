import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addModule } from './Action.jsx';
import './app.css';

const AddModule = ({ addModule }) => {
    const [idCounter, setIdCounter] = useState(3);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [note, setNote] = useState('');

    const handleAddModule = () => {
        if (title === '' || category === '' || note === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        const newModule = {
            id: idCounter.toString(),
            title,
            category,
            note: parseInt(note),
        };

        addModule(newModule);
        setTitle('');
        setCategory('');
        setNote('');
        setIdCounter(idCounter + 1);
    };

    return (
    <>
        <h2 className='text-3xl text-black font-bold p-4'>Add New Module:</h2>
        <form className="p-4 bg-[#2a2a2a] flex justify-around items-center">
                <input  className="p-2 w-[300px] " type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="p-2 w-[300px] " type="text" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)}/>
                <input className="p-2 w-[300px] " type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <button onClick={handleAddModule} className="p-2 w-[300px] bg-green-500 hover:bg-green-600">Add Module</button>
        </form>
    </>
    );
};

export default connect(null, { addModule })(AddModule);
