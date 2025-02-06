import React, { useEffect } from 'react'

// Компоненты
import { MainLayout } from '../Layouts';
import { SeminarItem } from '../components';
import { SeminarModal } from '../components';

// Функции
import { useServerActions } from '@/hooks/useServerActions';
import { useApp } from '@/hooks/useApp';


export const App = () => {
    const { loading } = useServerActions();
    const { seminars, seminarModal, handleModalOpen, handleModalClose, getData, handleDelete, handleUpdate, } = useApp();

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
