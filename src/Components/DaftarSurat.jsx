import React from "react";
import { Card } from "react-bootstrap";

const DaftarSurat = ({ surat, goDetail }) => {
  return (
      <div>
        <div className="col-md-6 col-lg-4 mb-3 float-md-start">
          <Card
              className="card-surat m-2 shadow"
              onClick={() => goDetail(surat.id)}
          >
            <Card.Body>
              <div className="badge-nomor-surat float-end">
                <strong className="badge rounded-pill ">{surat.id}</strong>
              </div>
              <Card.Title>
                {surat.name_simple} <strong>({surat.name_arabic}</strong> ){" "}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted fst-italic">
                '{surat.translated_name.name}'
              </Card.Subtitle>
              <Card.Text>{surat.verses_count} ayat</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
};

export default DaftarSurat;
