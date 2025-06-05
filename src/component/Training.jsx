import React, { useState, useEffect } from 'react';
import { addTraining } from './submit';
import { loadLocalStorage, saveLocalStorage } from './localStorage';
import { getSorted } from './SortTrainings';

function Training() {
    const [dateValue, setDateValue] = useState('');
    const [numberValue, setNumberValue] = useState('');
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const savedTrainings = loadLocalStorage('trainings');
        if (savedTrainings) setTrainings(savedTrainings);
    }, []);

    useEffect(() => {
        saveLocalStorage('trainings', trainings);
    }, [trainings]);

    const handleInputChangeDate = (e) => {
        let value = e.target.value;
        if (value.length === 9) return;
        setDateValue(value);
    }

    const handleInputChangeNumber = (e) => {
        let value = e.target.value;
        if (value.length === 5) return;
        setNumberValue(value);
    };

    const handleButton = () => {
        addTraining(dateValue, numberValue,
            setTrainings, setDateValue, setNumberValue);
    };

    const handleDelete = (id) => {
        setTrainings(prev => prev.filter(t => t.id !== id));
    };

    const sortTrainings = getSorted(trainings);
    
    return (
        <>
            <div className='container'>
                <div className='title' style={{ marginRight: '55px' }}>
                    Дата (ДД.ММ.ГГ.)
                </div>
                <div className='title' style={{ marginRight: '40px' }}>
                    Пройдено км
                </div>
                <input 
                    type="text" 
                    value={dateValue}
                    onChange={handleInputChangeDate}
                    maxLength={8}
                />
                <input
                    type="number" 
                    value={numberValue}
                    onChange={handleInputChangeNumber}
                    maxLength={4}
                />
                <button onClick={handleButton}>
                    ОК
                </button>
                <div className='title' style={{ marginLeft: '45px' }}>
                    Дата (ДД.ММ.ГГ.)
                </div>
                <div className='title' style={{ marginLeft: '70px' }}>
                    Пройдено км
                </div>
                <div className='title' style={{ marginLeft: '45px' }}>
                    Действия
                </div>
            </div>
            <div className='table'>
                {sortTrainings.length > 0 && (
                    <table>
                        <tbody>
                            {sortTrainings.map(training => (
                                <tr key={training.id}>
                                    <td style={{
                                        width: '160px',
                                        paddingLeft: '30px'
                                    }}>
                                        {training.date}
                                    </td>
                                    <td style={{
                                        width: '160px',
                                        paddingLeft: '80px'
                                    }}>
                                        {training.distance}
                                    </td>
                                    <td>
                                        <button className='buttonDelete'
                                            onClick={() => handleDelete(training.id)}
                                        >
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>        
    )
}

export default Training;