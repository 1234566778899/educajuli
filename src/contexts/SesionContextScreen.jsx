import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react'
import { DataRegister } from '../utils/dataRegister';
export const SesionContext = createContext();
const SesionContextScreen = ({ children }) => {
    const [user, setUser] = useState(null);
    const [teacherCurrent, setTeacherCurrent] = useState(null);
    const [desempenios, setDesempenios] = useState(JSON.parse(JSON.stringify(DataRegister)));
    const [currentDesempenio, setCurrentDesempenio] = useState(0);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [education, setEducation] = useState(null);
    const [startAt, setStartAt] = useState(null);
    const [visit, setVisit] = useState(null);
    const checkSession = async () => {
        try {
            const userString = await AsyncStorage.getItem('user');
            if (userString) {
                const user = JSON.parse(userString);
                setUser(user);
            }
        } catch (error) {
            console.error('Error al verificar la sesión:', error);
        }
    };
    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    }
    useEffect(() => {
        checkSession();
    }, [])
    return (
        <SesionContext.Provider value={{ education, startAt, setUser, logout, visit, setVisit, setStartAt, setEducation, currentCourse, setCurrentCourse, user, teacherCurrent, setTeacherCurrent, desempenios, setDesempenios, currentDesempenio, setCurrentDesempenio }}>
            {children}
        </SesionContext.Provider>
    )
}

export default SesionContextScreen