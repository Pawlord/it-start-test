import { useState } from 'react';

// Стили
import './seminar-modal.scss';

// Вспомогательные функции
import { formatDateForInput, formatDateForServer } from '@/lib/formatDate';

export function SeminarModal({ seminar, onClose, handleUpdate }) {

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

    if (!seminar) {
        return null;
    }

    return (
        <div className="seminar-overlay" onClick={e => handleClose(e)}>
            <div className="seminar-modal">
                <div className="seminar-modal__img-container">
                    <img className="seminar-modal__image" src={seminar.photo} alt='Изображение' />
                </div>

                {
                    isEditing
                        ? <input className='seminar-modal__title' type='text' value={title} onChange={e => handleInputChange(e, 'title')} />
                        : <h2 className='seminar-modal__title'>{title}</h2>
                }

                {
                    isEditing
                        ? <textarea className='seminar-modal__desc' value={desc} onChange={e => handleInputChange(e, 'description')} />
                        : <p className='seminar-modal__desc'>{desc}</p>
                }

                <div className='seminar-modal__devide-line' />

                <div className="seminar-modal__date-container">
                    {
                        isEditing
                            ? <input type='date' value={date} onChange={e => handleInputChange(e, 'date')} />
                            : <time className='date' dateTime={date} >{date}</time>
                    }

                    {
                        isEditing
                            ? <input type='time' value={time} onChange={e => handleInputChange(e, 'time')} />
                            : <time className='time' dateTime={time}>{time}</time>
                    }
                </div>

                {!isEditing && <button className='edit-button' onClick={handleEdit}>Редактировать</button>}

                {isEditing && (
                    <div className="seminar-modal__toolbar">
                        <button className='cancel-button' onClick={() => setIsEditing(false)}>Отменить</button>
                        <button className='save-button' onClick={handleSaveEditing}>Сохранить</button>
                    </div>
                )}
            </div>
        </div>
    )
}