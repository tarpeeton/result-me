"use client";
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const data = [
    {
        type: 1,
        title: 'Кто вы?',
        descriptions: 'Выберите подходящее описание для себя',
        data: [
            {
                type: 'button',
                title: 'Владелец бизнеса',
                active: false,
                value: 'Владелец бизнеса',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Руководитель',
                active: false,
                value: 'Руководитель',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Специалист',
                active: false,
                value: 'Специалист',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Маркетолог',
                active: false,
                value: 'Маркетолог',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'input',
                title: 'Ввести вручную',
                active: false,
                value: '',
                icon: '/public/'
            },
        ]
    },
    {
        type: 1,
        title: 'Желаемый результат',
        descriptions: 'Какой результат вы хотите получить?',
        data: [
            {
                type: 'button',
                title: 'Поток клиентов',
                active: false,
                value: 'Поток клиентов',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Повышение видимости',
                active: false,
                value: 'Повышение видимости',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Укрепление бренда ',
                active: false,
                value: 'Укрепление бренда',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Увеличение лояльности',
                active: false,
                value: 'Увеличение лояльности',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Реклама новой услуги или продукта',
                active: false,
                value: 'Увеличение лояльности',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'input',
                title: 'Ввести вручную',
                active: false,
                value: '',
                icon: '/public/'
            },
        ]
    },
    {
        type: 2,
        title: 'Источники клиентов',
        descriptions: 'Определите, откуда клиенты чаще всего узнают о вашей компании',
        data: [
            {
                type: 'button',
                title: 'Рекомендации других клиентов',
                active: false,
                value: 'Рекомендации других клиентов',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Направления специалистов',
                active: false,
                value: 'Направления специалистов',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Социальные сети',
                active: false,
                value: 'Социальные сети',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Сайт',
                active: false,
                value: 'Сайт',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Сервисы-агрегаторы',
                active: false,
                value: 'Сервисы-агрегаторы',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Наружная реклама',
                active: false,
                value: 'Наружная реклама',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            },
            {
                type: 'input',
                title: 'Ввести вручную',
                active: false,
                value: '',
                icon: '/public/'
            },
        ]
    },
    {
        type: 1,
        title: 'Калькулятор',
        descriptions: 'Подсчитайте количество приведенных клиентов за рекламную кампанию:',
        data: [
            {
                type: 'button',
                title: 'Контекстная реклама',
                active: false,
                value: 'Контекстная реклама',
                descriptions: 'Реклама вашего сайта в Google, Yandex',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Таргетированная реклама',
                active: false,
                value: 'Таргетированная реклама',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            }
        ]
    },
    {
        type: 1,
        title: 'Калькулятор',
        descriptions: 'Подсчитайте количество приведенных клиентов за рекламную кампанию:',
        data: [
            {
                type: 'button',
                title: 'Контекстная реклама',
                active: false,
                value: 'Контекстная реклама',
                descriptions: 'Реклама вашего сайта в Google, Yandex',
                icon: '/public/'
            },
            {
                type: 'button',
                title: 'Таргетированная реклама',
                active: false,
                value: 'Таргетированная реклама',
                descriptions: 'Учредитель, соучредитель или генеральный директор компании',
                icon: '/public/'
            }
        ]
    },
]

export default function QuizModal({ setQuizModal }) {
const [steps, setSteps] = useState(0);

  return createPortal (
    <div className='fixed inset-0 z-[99999] flex items-center justify-center bg-white p-4'>
вавава
    </div>,
    document.body
  );
}
