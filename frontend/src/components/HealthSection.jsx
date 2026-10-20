import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';

const API_URL = 'http://localhost:3001';

function HealthSection() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta del API');
        return res.json();
      })
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="health-section">
      <div className="health-card">
        <h4>Estado del API</h4>

        {loading && (
          <div className="d-flex align-items-center gap-2">
            <Spinner size="sm" color="primary" />
            <p className="mb-0">Consultando el estado del API...</p>
          </div>
        )}

        {error && <p className="text-danger">❌ Error: {error}</p>}

        {health && !loading && (
          <>
            <p className="status-message">
              <strong>{health.message}</strong>
            </p>
            <p className="mb-1">
              <span className="label">Servicio:</span> {health.service}
            </p>
            <p className="mb-1">
              <span className="label">Versión:</span> {health.version}
            </p>
            <p className="mb-0">
              <span className="label">Última verificación:</span>{' '}
              {new Date(health.timestamp).toLocaleString()}
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default HealthSection;
