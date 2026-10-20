import { useEffect, useState } from 'react';
import {
  Spinner, Card, CardBody, CardTitle, CardText,
  Badge, Row, Col, Alert
} from 'reactstrap';

const API_URL = 'http://localhost:3001';

function InfoSection() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/info`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener la información');
        return res.json();
      })
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center gap-2">
        <Spinner color="primary" />
        <span>Cargando información de integrantes...</span>
      </div>
    );
  }

  if (error) return <Alert color="danger">❌ {error}</Alert>;

  return (
    <div>
      <h4 className="mb-3">Integrantes del grupo</h4>
      <p className="text-muted">
        {info.curso} — {info.ciclo} — {info.taller}
      </p>

      <Row>
        {info.integrantes.map((persona) => (
          <Col md="4" sm="6" xs="12" key={persona.id} className="mb-3">
            <Card className="h-100 shadow-sm integrante-card">
              <CardBody>
                <CardTitle tag="h5">{persona.nombre}</CardTitle>
                <CardText className="mb-1">
                  <strong>Edad:</strong> {persona.edad} años
                </CardText>
                <CardText className="mb-2">
                  <strong>Carrera:</strong> {persona.carrera}
                </CardText>
                <Badge color="success" pill>
                  Materias aprobadas: {persona.materiasAprobadas}
                </Badge>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default InfoSection;
