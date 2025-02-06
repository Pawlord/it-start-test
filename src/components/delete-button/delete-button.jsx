// Стили
import './delete-button.scss';

export function DeleteButton({ onClick }) {
    return (
        <div className="delete-button-container">
            <span className="delete-button">x</span>
        </div>
    )
}