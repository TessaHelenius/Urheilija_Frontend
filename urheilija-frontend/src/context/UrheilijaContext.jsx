import { createContext, useReducer } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import UrheilijaReducer from "./UrheilijaReducer"; // Käytetään UrheilijaReducer-tiedostoa
import {
  GET_URHEILIJAT,
  GET_URHEILIJA,
  ADD_URHEILIJA,
  UPDATE_URHEILIJA,
  DELETE_URHEILIJA,
} from "./types";

const UrheilijaContext = createContext();

const initialState = {
  urheilijat: [],
  urheilija: {},
};

export const UrheilijaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UrheilijaReducer, initialState);

  // Hae kaikki urheilijat
  const haeUrheilijat = async () => {
    const res = await axios.get("http://localhost:3000/urheilijat");
    dispatch({ type: GET_URHEILIJAT, payload: res.data });
  };

  // Hae yksittäinen urheilija ID:n perusteella
  const haeUrheilija = async (id) => {
    const res = await axios.get(`http://localhost:3000/urheilijat/${id}`);
    dispatch({ type: GET_URHEILIJA, payload: res.data });
  };

  // Lisää uusi urheilija
  const lisaaUrheilija = async (urheilija) => {
    const res = await axios.post("http://localhost:3000/urheilijat", urheilija);
    dispatch({ type: ADD_URHEILIJA, payload: res.data });
  };

  // Päivitä urheilija ID:n perusteella
  const paivitaUrheilija = async (id, urheilija) => {
    const res = await axios.put(
      `http://localhost:3000/urheilijat/${id}`,
      urheilija
    );
    dispatch({ type: UPDATE_URHEILIJA, payload: res.data });
  };

  // Poista urheilija ID:n perusteella
  const poistaUrheilija = async (id) => {
    await axios.delete(`http://localhost:3000/urheilijat/${id}`);
    dispatch({ type: DELETE_URHEILIJA, payload: id });
  };

  return (
    <UrheilijaContext.Provider
      value={{
        ...state,
        haeUrheilijat,
        haeUrheilija,
        lisaaUrheilija,
        paivitaUrheilija,
        poistaUrheilija,
      }}
    >
      {children}
    </UrheilijaContext.Provider>
  );
};

// Lisäätään prop-types-määrittely children-propsille
UrheilijaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UrheilijaContext;
