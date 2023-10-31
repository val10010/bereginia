import React, { useEffect } from 'react';

const DynamicScriptLoader = ({ scriptUrl, dataAttributes }) => {
    useEffect(() => {
        const scriptElement = document.createElement('script');
        scriptElement.src = scriptUrl;
        scriptElement.async = true;

        if (dataAttributes) {
            Object.keys(dataAttributes).forEach(attributeName => {
                scriptElement.setAttribute(`data-${attributeName}`, dataAttributes[attributeName]);
            });
        }

        document.body.appendChild(scriptElement);

        const cleanup = () => {
            document.body.removeChild(scriptElement);
        };

        return cleanup;
    }, [scriptUrl, dataAttributes]);

    return null;
};

export default DynamicScriptLoader;
