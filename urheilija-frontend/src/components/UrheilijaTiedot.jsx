import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UrheilijaContext from "../context/UrheilijaContext";

const UrheilijaTiedot = () => {
  // Haetaan urheilijan id URL-parametreista
  const { id } = useParams();
  // Navigointi "ominaisuus"
  const navigate = useNavigate();
  // Haetaan kontekstista tarvittavat funktiot ja data
  const { urheilija, haeUrheilija, poistaUrheilija } =
    useContext(UrheilijaContext);

  // Haetaan urheilijan tiedot, kun komponentti ladataan
  useEffect(() => {
    haeUrheilija(id);
  }, [id]);

  // Käsitellään urheilijan poistaminen
  const handlePoista = () => {
    poistaUrheilija(id);
    navigate("/");
  };

  return (
    <div>
      {urheilija ? (
        <div>
          {/* Näytetään urheilijan nimi ja kutsumanimi */}
          <h2>
            {urheilija.etunimi} {urheilija.sukunimi}({urheilija.kutsumanimi})
          </h2>
          {/* Näytetään urheilijan laji */}
          <p>
            <strong>Laji:</strong> {urheilija.laji}
          </p>
          {/* Näytetään urheilijan saavutukset */}
          <p>
            <strong>Saavutukset:</strong> {urheilija.saavutukset}
          </p>
          {/* Näytetään urheilijan syntymävuosi */}
          <p>
            <strong>Syntymävuosi:</strong>{" "}
            {new Date(urheilija.syntymavuosi).getFullYear()}
          </p>
          {/* Näytetään urheilijan paino */}
          <p>
            <strong>Paino:</strong> {urheilija.paino} kg
          </p>
          {/* Linkki urheilijan kuvaan */}
          <p>
            <a
              href={urheilija.kuvaLinkki}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkki kuvaan
            </a>
          </p>
          <button onClick={handlePoista} className="btn btn-danger">
            Poista urheilija
          </button>
        </div>
      ) : (
        <p>Ladataan...</p>
      )}
    </div>
  );
};

export default UrheilijaTiedot;
