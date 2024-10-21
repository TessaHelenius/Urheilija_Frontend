import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UrheilijaContext from "../context/UrheilijaContext";

// LisaaUrheilija-komponentti
const LisaaUrheilija = () => {
  // Haetaan lisaaUrheilija-funktio UrheilijaContextista
  const { lisaaUrheilija } = useContext(UrheilijaContext);
  // Käytetään useNavigate-hookkia navigointiin
  const navigate = useNavigate();

  // Määritellään urheilija-tila useState-hookilla
  const [urheilija, setUrheilija] = useState({
    etunimi: "",
    sukunimi: "",
    kutsumanimi: "",
    syntymavuosi: "",
    paino: "",
    kuvaLinkki: "",
    laji: "",
    saavutukset: "",
  });

  // Puretaan urheilija-tilan arvot muuttujiksi
  const {
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuvaLinkki,
    laji,
    saavutukset,
  } = urheilija;

  // Käsitellään lomakkeen kenttien muutokset
  const onChange = (e) => {
    setUrheilija({ ...urheilija, [e.target.name]: e.target.value });
  };

  // Käsitellään lomakkeen lähetys
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(urheilija);
    // Kutsutaan lisaaUrheilija-funktiota ja lähetetään lomakkeen tiedot
    lisaaUrheilija(urheilija);
    // Navigoidaan etusivulle
    navigate("/");
    setUrheilija({
      etunimi: "",
      sukunimi: "",
      kutsumanimi: "",
      syntymavuosi: "",
      paino: "",
      kuvaLinkki: "",
      laji: "",
      saavutukset: "",
    });
  };

  const meneEtusivulle = () => {
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Lisää uusi urheilija</h3>
      <input
        type="text"
        name="etunimi"
        value={etunimi}
        onChange={onChange}
        placeholder="Etunimi"
      />
      <input
        type="text"
        name="sukunimi"
        value={sukunimi}
        onChange={onChange}
        placeholder="Sukunimi"
      />
      <input
        type="text"
        name="kutsumanimi"
        value={kutsumanimi}
        onChange={onChange}
        placeholder="Kutsumanimi"
      />
      <input
        type="text"
        name="syntymavuosi"
        value={syntymavuosi}
        onChange={onChange}
        placeholder="Syntymävuosi"
      />
      <input
        type="text"
        name="paino"
        value={paino}
        onChange={onChange}
        placeholder="Paino"
      />
      <input
        type="text"
        name="kuvaLinkki"
        value={kuvaLinkki}
        onChange={onChange}
        placeholder="Kuvan linkki"
      />
      <input
        type="text"
        name="laji"
        value={laji}
        onChange={onChange}
        placeholder="Laji"
      />
      <textarea
        name="saavutukset"
        value={saavutukset}
        onChange={onChange}
        placeholder="Saavutukset"
      ></textarea>
      <button type="submit">Lisää urheilija</button>

      <button onClick={meneEtusivulle} className="btn btn-secondary">
        Takaisin etusivulle
      </button>
    </form>
  );
};

export default LisaaUrheilija;
