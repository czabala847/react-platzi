import React from "react";

function useLocalStorage(nameLocalStorage, valueDefault) {
  const [item, setItem] = React.useState(valueDefault);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

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
      } catch (error) {
        setError(true);
      }
    }, 1000);
  });

  const saveItem = (newItems) => {
    localStorage.setItem(nameLocalStorage, JSON.stringify(newItems));

    setItem(newItems);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
