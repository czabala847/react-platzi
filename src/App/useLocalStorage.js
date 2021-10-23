import React from "react";

function useLocalStorage(nameLocalStorage, valueDefault) {
  const [item, setItem] = React.useState(valueDefault);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(nameLocalStorage);

        let parsedItems;

        //Si no esta en localstorage crearlo
        if (!localStorageItems) {
          localStorage.setItem(nameLocalStorage, JSON.stringify(valueDefault));
          parsedItems = valueDefault;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItem(parsedItems);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(true);
      }
    }, 1000);
  }, [sincronizedItem]);

  const saveItem = (newItems) => {
    localStorage.setItem(nameLocalStorage, JSON.stringify(newItems));

    setItem(newItems);
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };
