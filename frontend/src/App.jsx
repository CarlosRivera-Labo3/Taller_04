import { Container, Row, Col } from 'reactstrap';
import HealthSection from './components/HealthSection';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <Container>
          <h1 className="text-center">Taller IV</h1>
          <p className="text-center subtitle">
            Programación Web — Ciclo 02, 2026
          </p>
        </Container>
      </header>

      <Container className="my-4">
        <Row>
          <Col md="12">
            <HealthSection />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12">
            <InfoSection />
          </Col>
        </Row>
      </Container>

      <footer className="text-center py-3 footer">
        <small>Taller IV — Programación Web © 2026</small>
      </footer>
    </div>
  );
}

export default App;
