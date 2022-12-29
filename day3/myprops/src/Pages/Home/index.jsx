import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18next } = useTranslation();
    console.log(t, 't-------------', i18next)
    return (
        <div>
            <h1>{t('title')}</h1> 
            <h1>{t('brand')}</h1> 
            <h1>{t('test')}</h1> 
        </div>
    )
}

export default Home