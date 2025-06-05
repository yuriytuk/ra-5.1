const trainingData = (dateValue, numberValue) => {
    if (!dateValue || !numberValue) {
        alert('Пожалуйста, заполните все поля');
        return false;
    }

    if (dateValue.length !== 8 || !/^\d{2}\.\d{2}\.\d{2}$/.test(dateValue)) {
        alert('Введите правильно дату');
        return false;
    }

    if (isNaN(numberValue) || Number(numberValue) <= 0) {
        alert('Дистанция должна быть положительным числом');
        return false;
    }

    return true;
};

const createTraining = (dateValue, numberValue) => {
    return {
        date: dateValue,
        distance: Number(numberValue),
        id: Date.now()
    };
};

export const addTraining = (dateValue, numberValue, setTrainings, setDateValue, setNumberValue) => {
    if (!trainingData(dateValue, numberValue)) return;

    const newTraining = createTraining(dateValue, numberValue);

    setTrainings(prev => {
        const existing = prev.find(t => t.date === dateValue);
        if (existing) {
            return prev.map(t =>
                t.date === dateValue
                    ? { ...t, distance: t.distance + newTraining.distance }
                    : t
            );
        }
        return [...prev, newTraining];
    });

    setDateValue('');
    setNumberValue('');
};  