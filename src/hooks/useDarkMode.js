import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {

    const [dark, setDark] = useLocalStorage('dark')

    return [dark, setDark];

}