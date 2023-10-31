import { useEffect } from 'react';
import { smoothScrollTo } from 'Utils';
import { useSearchParams } from 'react-router-dom';

export const useScrollToByURLParam = (paramName) => {
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const block = urlParams.get(paramName);
        urlParams.delete(paramName);
        setSearchParams(urlParams);

        smoothScrollTo(block);
    }, [paramName]);
};
