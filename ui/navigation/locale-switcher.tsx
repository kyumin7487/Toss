'use client'

import { type Locale } from '@/i18n/config';
import {setUserLocale, getUserLocale} from '@/services/locale';
import {useTransition, useState, useEffect} from 'react';

import NavigationItem from './navigation-item';

export default function LocaleSwitcher(){
    const [isPending, startTransition] = useTransition();
    const [locale, setCurrentLocale] = useState('ko');

    useEffect(()=>{
        async function getLocale(){
            const l = await getUserLocale();
            setCurrentLocale(l);
        }
        getLocale();
    },[]);
    const setLocale = (locale:Locale)=>{
        startTransition(() => {
            setUserLocale(locale);
            setCurrentLocale(locale);
        });
    }
    return (
        <div className="inline">
            {isPending? <span></span>:null}
            <NavigationItem name="한국어"
                            className={locale=='ko'? '':'text-[#b0b8c1]'}
                            onClick={()=>setLocale('ko')}/>
            <span className="ml-4 mr-4">|</span>
            <NavigationItem name="ENG"
                            className={locale=='en'? '':'text-[#b0b8c1]'}
                            onClick={()=>setLocale('en')}/>
        </div>
    );
}