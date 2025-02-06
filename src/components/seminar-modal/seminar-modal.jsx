// Стили
import './seminar-modal.scss';

// Кастомные хуки
import { useModal } from '@/hooks/useModal';

export function SeminarModal({ seminar, onClose, handleUpdate }) {

    const { title, desc, date, time, isEditing, setIsEditing, handleClose, handleInputChange, handleEdit, handleSaveEditing, } = useModal(seminar, onClose, handleUpdate);

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