import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UrheilijaContext from "../context/UrheilijaContext";

const MuokkaaUrheilija = () => {
  // Haetaan urheilijan id URL-parametreista
  const { id } = useParams();
  // Navigointi-ominaisuus
  const navigate = useNavigate();
  // Haetaan kontekstista tarvittavat funktiot ja data
  const { urheilija, haeUrheilija, paivitaUrheilija } =
    useContext(UrheilijaContext);

  // Määritellään muokattavan urheilijan tila
  const [muokattuUrheilija, setMuokattuUrheilija] = useState({
    etunimi: "",
    sukunimi: "",
    kutsumanimi: "",
    syntymavuosi: "",
    paino: "",
    kuvaLinkki: "",
    laji: "",
    saavutukset: "",
  });

  // Haetaan urheilijan tiedot, kun komponentti ladataan
  useEffect(() => {
    haeUrheilija(id);
  }, [id]);

  // Päivitetään muokattavan urheilijan tila, kun urheilijan tiedot muuttuvat
  useEffect(() => {
    if (urheilija) {
      setMuokattuUrheilija(urheilija);
    }
  }, [urheilija]);

  // Käsitellään lomakkeen kenttien muutokset
  const onChange = (e) => {
    setMuokattuUrheilija({
      ...muokattuUrheilija,
      [e.target.name]: e.target.value,
    });
  };

  // Käsitellään lomakkeen lähetys
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(muokattuUrheilija);
    paivitaUrheilija(id, muokattuUrheilija);
    navigate("/");
  };

  // Navigoidaan etusivulle
  const meneEtusivulle = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>Muokkaa urheilijaa</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="etunimi"
          value={muokattuUrheilija.etunimi}
          onChange={onChange}
          placeholder="Etunimi"
        />
        <input
          type="text"
          name="sukunimi"
          value={muokattuUrheilija.sukunimi}
          onChange={onChange}
          placeholder="Sukunimi"
        />
        <input
          type="text"
          name="kutsumanimi"
          value={muokattuUrheilija.kutsumanimi}
          onChange={onChange}
          placeholder="Kutsumanimi"
        />
        <input
          type="text"
          name="syntymavuosi"
          value={muokattuUrheilija.syntymavuosi}
          onChange={onChange}
          placeholder="Syntymävuosi"
        />
        <input
          type="text"
          name="paino"
          value={muokattuUrheilija.paino}
          onChange={onChange}
          placeholder="Paino"
        />
        <input
          type="text"
          name="kuvaLinkki"
          value={muokattuUrheilija.kuvaLinkki}
          onChange={onChange}
          placeholder="Kuvan linkki"
        />
        <input
          type="text"
          name="laji"
          value={muokattuUrheilija.laji}
          onChange={onChange}
          placeholder="Laji"
        />
        <textarea
          name="saavutukset"
          value={muokattuUrheilija.saavutukset}
          onChange={onChange}
          placeholder="Saavutukset"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Päivitä urheilija
        </button>
      </form>
      <button onClick={meneEtusivulle} className="btn btn-secondary">
        Takaisin etusivulle
      </button>
    </div>
  );
};

export default MuokkaaUrheilija;
