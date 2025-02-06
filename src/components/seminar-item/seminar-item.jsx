// Стили
import './seminar-item.scss';

// Компоненты
import { DeleteButton } from '../delete-button/delete-button';

export function SeminarItem({ imgUrl, title, desc, date, time, handleDelete, handleModalOpen }) {
    return (
        <div className='seminar-item' onClick={handleModalOpen}>
            <div className="seminar-item__buttons-container" onClick={handleDelete}>
                <DeleteButton />
            </div>

            <div className="seminar-item__img-container">
                <img className="seminar-item__image" src={imgUrl} alt='Изображение' />
            </div>

            <h2 className='seminar-item__title'>{title}</h2>
            <p className='seminar-item__desc'>{desc}</p>
            <div className='seminar-item__devide-line' />

            <div className="seminar-item__date-container">
                <time className='date' dateTime={date}>{date}</time>
                <p className='time'>{time}</p>
            </div>
        </div>
    )
}