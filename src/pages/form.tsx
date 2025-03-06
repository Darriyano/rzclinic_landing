import React, { useState } from 'react';
import "../styles/form-style.css";
import Header from "../components/header";
import { MobileButtonBack } from "../components/mobile-button-back";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Footer} from "../components/footer";

const AppointmentForm: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [wish, setWish] = useState<string>('');
    const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; phone?: string }>({});

    // Функция валидации полей
    const validate = (): boolean => {
        const tempErrors: { firstName?: string; lastName?: string; phone?: string } = {};
        let valid = true;

        if (!firstName.trim()) {
            tempErrors.firstName = 'Имя обязательно';
            valid = false;
        }
        if (!lastName.trim()) {
            tempErrors.lastName = 'Фамилия обязательна';
            valid = false;
        }
        if (!phone.trim()) {
            tempErrors.phone = 'Телефон обязателен';
            valid = false;
        } else {
            // Проверка, разрешаем +, скобки, пробелы и цифры
            if (!/^[\d+\(\)\s]+$/.test(phone)) {
                tempErrors.phone = 'Введите корректный телефон (разрешены цифры, +, скобки и пробелы)';
                valid = false;
            } else {
                const digits = phone.replace(/\D/g, '');
                if (digits.length < 10) {
                    tempErrors.phone = 'Введите корректный телефон (минимум 10 цифр)';
                    valid = false;
                }
            }
        }

        setErrors(tempErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validate()) {
            toast.success('Успешно отправлено!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Здесь можно добавить логику отправки данных на сервер

            // Сброс полей формы
            setFirstName('');
            setLastName('');
            setPhone('');
            setWish('');
            setErrors({});
        }
    };

    return (
        <>
            <Header />
            <MobileButtonBack />
            <div className="form-intro-screen">
                <form onSubmit={handleSubmit} className="appointment-form">
                    <h2 className="form-heading">Запишитесь нa&nbsp;прием</h2>
                    <span>Mы гарантируем конфиденциальность персональных данных</span>
                    <div className="form-group">
                        <label htmlFor="firstName">Имя</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Фамилия</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон для связи</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="wish">Пожелание или вопрос</label>
                        <textarea
                            id="wish"
                            value={wish}
                            onChange={(e) => setWish(e.target.value)}
                            rows={3}
                            className="fixed-textarea"
                        />
                    </div>
                    <button type="submit" className="intro-button">
                        Отправить
                    </button>
                </form>
            </div>
            <ToastContainer />
            <Footer/>
        </>
    );
};

export default AppointmentForm;
