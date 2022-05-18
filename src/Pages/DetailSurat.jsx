import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Detailsurat = (props) => {
  const [ayatSurat, setAyatsurat] = useState([]);
  const [translateSurat, setTranslatesurat] = useState([]);
  const [infoSurat, setInfosurat] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    axios
        .get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${id}`)
        .then((res) => {
          setAyatsurat(res.data.verses)
        })
        .catch((err) => {
          console.log(err)
        })
    axios
      .get(`https://api.quran.com/api/v4/chapters?language=id/${id}`)
      .then((res) => {
        setInfosurat(res.data.chapters)
      })
      .catch((err) => {
        console.log(err)
      })
        axios
            .get(`https://api.quran.com/api/v4/quran/translations/134?chapter_number=${id}`)
            .then((res) => {
                setTranslatesurat(res.data.translations)
            })
            .catch((err) => {
                console.log(err)
            })
  }, [id])

  return (
    <div className="scroll overflow-auto">
      <div className=" mb-3">
        <div className="container">
          <div
            className="btn btn-dark mb-2"
            onClick={() => {
              props.history.push("/");
            }}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} /> {"  "}
            Back
          </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className=" card card-detail-surat shadow">
                      <div className="card-body">
                        <h3 className="card-title">
                          {infoSurat.name_simple} - {infoSurat.name_arabic}
                        </h3>
                        <span className="card-text">Arti : {infoSurat.translated_name}</span>
                        <p className="card-text">Jumlah Ayat : {infoSurat.verses_count}</p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>

      <div className="container detail-ayat">
        <div className="row">
          <div className="col-md-12">
              {ayatSurat.map((ayat, idx) => {
                  return (
                      <div className="mb-2" key={idx.id}>
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="card card-ayat shadow">
                                      <div className="card-body">
                                          <h3 className="card-title">
                                              {" "}
                                              <strong className="badge rounded-pill bg-dark text-light">
                                                  {ayat.verse_key}
                                              </strong>
                                          </h3>
                                          <h4 className="text-end">{ayat.text_uthmani}</h4>
                                        {translateSurat.length? <p className="card-text">{translateSurat[idx].text}</p> : null}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
              })
              } : (
              <div className="d-flex align-items-center">
                <h1>Loading</h1>
                <div className="me-auto justify-content-center">
                  <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsurat;
