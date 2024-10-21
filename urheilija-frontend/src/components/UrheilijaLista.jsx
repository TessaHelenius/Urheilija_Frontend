import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UrheilijaContext from "../context/UrheilijaContext";

const UrheilijaLista = () => {
  const { urheilijat, haeUrheilijat, poistaUrheilija } =
    useContext(UrheilijaContext);

  useEffect(() => {
    haeUrheilijat();
  }, []);

  return (
    <div>
      <h2>Lista urheilijoista</h2>

      {urheilijat.length > 0 ? (
        urheilijat.map((urheilija) => (
          <div key={urheilija.id} className="card">
            {/* Näytetään urheilijan nimi ja kutsumanimi */}
            <h4>
              {urheilija.etunimi} {urheilija.sukunimi}({urheilija.kutsumanimi})
            </h4>
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
            {/* Linkki urheilijan muokkaussivulle */}
            <Link to={`/muokkaa/${urheilija.id}`} className="btn">
              Muokkaa
            </Link>
            {/* Poista urheilija -painike */}
            <button
              onClick={() => poistaUrheilija(urheilija.id)}
              className="btn btn-danger"
            >
              Poista
            </button>
          </div>
        ))
      ) : (
        <>
          {/* Näytetään viesti, jos urheilijoita ei ole */}
          <p>Ei urheilijoita.</p>
        </>
      )}
    </div>
  );
};

export default UrheilijaLista;
