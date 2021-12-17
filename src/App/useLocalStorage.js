import React from "react";

function useLocalStorage(nameLocalStorage, valueDefault) {
  const initialState = {
    item: valueDefault,
    loading: true,
    error: false,
    sincronizedItem: true,
  };

  const actionTypes = {
    error: "ERROR",
    success: "SUCCESS",
    save: "SAVE",
    sincronize: "SINCRONIZE",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.error:
        return {
          ...state,
          error: true,
        };
      case actionTypes.success:
        return {
          ...state,
          error: false,
          loading: false,
          sincronizedItem: true,
          item: action.payload,
        };
      case actionTypes.save:
        return {
          ...state,
          item: action.payload,
        };
      case actionTypes.sincronize:
        return {
          ...state,
          loading: true,
          sincronizedItem: false,
        };
      default:
        break;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { item, loading, error, sincronizedItem } = state;

  const onSuccess = (item) =>
    dispatch({
      type: actionTypes.success,
      payload: item,
    });

  const onError = () => dispatch({ type: actionTypes.error });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

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

        onSuccess(parsedItems);
      } catch (error) {
        onError();
      }
    }, 1000);
  }, [sincronizedItem]);

  const saveItem = (newItems) => {
    localStorage.setItem(nameLocalStorage, JSON.stringify(newItems));
    onSave(newItems);
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };
