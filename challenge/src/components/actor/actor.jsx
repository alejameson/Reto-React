import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActorInfo } from "../../actions";
import { PageHeader } from "antd";
import { useHistory } from "react-router-dom";
import "./Actor.css";

export default function Actor() {
  const [actor, setActor] = useState(null);

  const dispatch = useDispatch();

  const { push } = useHistory();

  const info = useSelector((state) => state.actorInfo);

  useEffect(() => {
      setActor(info)
  },[info])

  /* useEffect(() => {
    setActor(JSON.parse(window.localStorage.getItem('actor')));
  }, []); */

  useEffect(() => {
    localStorage.setItem('actor', actor);
  }, [info]);
  /* dispatch(getActorInfo(name)); */
  function onBack(e) {
    push("/");
  }

  console.log(actor, "ACTOOOOR")
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={(e) => onBack(e)}
        title="Regresar"
        subTitle="Regresa a la seleccion de imagen"
      />
      ,
      {actor ? (
        <div className="actorPanel">
          <div className="actorColumn">
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt=""
              className="actorImg"
            />
            <h1>{actor.name}</h1>
            {actor.gender === 2 ? <h3 className="gender">HOMBRE</h3> : <h3 className="gender">MUJER</h3>}
            <h3>{`Popularidad: ${actor.popularity}`}</h3>
          </div>
          <div className="actorPeliculas">
            <div className="peliTitle">
              <h1>Peliculas:</h1>
            </div>
            <div>
              {actor.known_for.map((m) => (
                <div>
                  <div className="movieRating">
                    <h2>{m.original_title}</h2>
                    <h2>{`${m.vote_average}/10⭐`}</h2>
                  </div>
                  <div className="movieInfo">
                      <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} width="135" height="200" alt="" />
                      <div className="movieOverview">
                      <h2>{m.overview}</h2>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}
