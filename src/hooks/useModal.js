import { useState } from 'react';

// Вспомогательные функции
import { formatDateForInput, formatDateForServer } from '@/lib/formatDate';

export function useModal(seminar, onClose, handleUpdate) {
    const [title, setTitle] = useState(seminar.title);
    const [desc, setDesc] = useState(seminar.description);
    const [date, setDate] = useState(seminar.date);
    const [time, setTime] = useState(seminar.time);

    const [isEditing, setIsEditing] = useState(false);

    const handleClose = async (e) => {
        if (e.target.className === 'seminar-overlay') {
            const updatedData = {
                title,
                description: desc,
                date,
                time
            }

            handleUpdate(seminar.id, updatedData);

            onClose();
        }
    }

    const handleInputChange = (e, fieldId) => {
        switch (fieldId) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'description':
                setDesc(e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'time':
                setTime(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleEdit = () => {
        const formatDate = formatDateForInput(date)
        setDate(formatDate);
        setIsEditing(true)

    }

    const handleSaveEditing = async () => {
        const formatDate = formatDateForServer(date)
        setDate(formatDate);

        setIsEditing(false);
    }

    return {
        title,
        desc,
        date,
        time,
        isEditing,
        setIsEditing,
        handleClose,
        handleInputChange,
        handleEdit,
        handleSaveEditing,
    }
}