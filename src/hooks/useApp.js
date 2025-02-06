import { useState } from "react";

// Вспомогательные функции
import { useServerActions } from "./useServerActions";

//Константы
import { URL } from '@/consts';

export function useApp() {
    const { fetchData, deleteData, changeData } = useServerActions();

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

    return {
        seminars,
        seminarModal,
        handleModalOpen,
        handleModalClose,
        getData,
        handleDelete,
        handleUpdate,
    }

}