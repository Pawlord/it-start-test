import React, { useState, useEffect } from 'react'

// Компоненты
import { MainLayout } from '../Layouts';
import { SeminarItem } from '../components';
import { SeminarModal } from '../components';

// Функции
import { useServerActions } from '../lib/useServerActions';

//Константы
import { URL } from '@/consts';

export const App = () => {
    const { loading, fetchData, deleteData, changeData } = useServerActions();

    const [seminars, setSeminars] = useState([]);
    const [seminarModal, setSeminarModal] = useState(null);

    async function getData() {
        const data = await fetchData(URL);
        setSeminars(data);
    }

    const handleModalOpen = (seminar) => {
        setSeminarModal(seminar)
    }

    const handleModalClose = () => {
        setSeminarModal(null);
    }

    const handleDelete = async (e, id) => {
        try {
            e.stopPropagation();
            const resp = await deleteData(URL, id);

            if (!resp) console.log('Ошибка удаления');

            console.log(resp);
            getData();

        } catch (error) {
            console.error(error)
        }
    }

    const handleUpdate = async (id, updatedData) => {
        try {
            const resp = await changeData(URL, id, updatedData)

            if (!resp) console.log('Ошибка изменения данных');

            console.log(resp)
            getData();

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return <p>Загрузка...</p>
    }

    return (
        <MainLayout>
            {
                seminars.map(seminar =>
                    <SeminarItem
                        key={seminar.id}
                        imgUrl={seminar.photo}
                        title={seminar.title}
                        desc={seminar.description}
                        date={seminar.date}
                        time={seminar.time}
                        handleModalOpen={() => handleModalOpen(seminar)}
                        handleDelete={e => handleDelete(e, seminar.id)}
                    />)
            }
            {seminarModal && <SeminarModal seminar={seminarModal} onClose={handleModalClose} handleUpdate={handleUpdate} />}
        </MainLayout>
    )
}
