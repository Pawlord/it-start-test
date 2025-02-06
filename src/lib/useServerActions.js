import { useState } from 'react';

export function useServerActions() {

    const [loading, setLoading] = useState(false);

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            setLoading(true)
            if (response.ok) {
                const data = await response.json();
                return data;
                // setSeminars(data);
            } else {
                throw new Error(`Ошибка получения данных: ${response.status}`);
            }
        } catch (error) {
            console.error("Ошибка сервера:", error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteData(url, id) {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            })
            setLoading(true)

            if (response.ok) {
                // await fetchData(url)
                return { message: 'Успешно удалено.', status: response.ok }
            } else {
                throw new Error(`Ошибка HTTP! ${response.status}`)
            }
        } catch (error) {
            console.error('Ошибка удаления!')
        } finally {
            setLoading(false)
        }
    }

    async function changeData(url, id, data) {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setLoading(true)

            if (response.ok) {
                // await fetchData(url)
                return { message: 'Данные успешно изменены.', status: response.ok }
            } else {
                throw new Error(`Ошибка HTTP! ${response.status}`)
            }
        } catch (error) {
            console.error('Ошибка применения изменений!')
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        fetchData,
        deleteData,
        changeData,
    }
}