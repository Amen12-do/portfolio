import { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  Calendar, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function CertificateModal({ certificate, allCertificates, onClose, onSelectCert }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentIndex = allCertificates.findIndex(c => c.id === certificate?.id);

  const handleNext = useCallback(() => {
    setZoomLevel(1);
    const nextIdx = (currentIndex + 1) % allCertificates.length;
    onSelectCert(allCertificates[nextIdx]);
  }, [currentIndex, allCertificates, onSelectCert]);

  const handlePrev = useCallback(() => {
    setZoomLevel(1);
    const prevIdx = (currentIndex - 1 + allCertificates.length) % allCertificates.length;
    onSelectCert(allCertificates[prevIdx]);
  }, [currentIndex, allCertificates, onSelectCert]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  if (!certificate) return null;

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const resetZoom = () => setZoomLevel(1);

  const handleSelectWithReset = (cert) => {
    setZoomLevel(1);
    onSelectCert(cert);
  };

  return (
    <div className="modal-overlay cert-modal-overlay" onClick={onClose}>
      <div 
        className="modal-container cert-modal-box" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Top Header */}
        <div className="cert-modal-header">
          <div className="cert-header-left">
            <span className="cert-badge-glow">
              <ShieldCheck size={16} />
              <span>Attestation Officielle</span>
            </span>
            <h3 id="cert-modal-title" className="cert-modal-title">
              {certificate.title}
            </h3>
            <span className="cert-modal-issuer">
              {certificate.issuer} &bull; Titulaire : <strong>{certificate.recipient}</strong>
            </span>
          </div>

          <div className="cert-header-controls">
            {/* Zoom Controls */}
            <div className="cert-zoom-toolbar">
              <button 
                type="button" 
                onClick={zoomOut} 
                className="cert-ctrl-btn" 
                title="Dézoomer"
                disabled={zoomLevel <= 0.75}
              >
                <ZoomOut size={17} />
              </button>
              <span className="cert-zoom-indicator">{Math.round(zoomLevel * 100)}%</span>
              <button 
                type="button" 
                onClick={zoomIn} 
                className="cert-ctrl-btn" 
                title="Zoomer"
                disabled={zoomLevel >= 2.5}
              >
                <ZoomIn size={17} />
              </button>
              <button 
                type="button" 
                onClick={resetZoom} 
                className="cert-ctrl-btn" 
                title="Réinitialiser le zoom"
              >
                <RotateCcw size={15} />
              </button>
            </div>

            {/* Direct Image Link */}
            <a 
              href={certificate.image} 
              target="_blank" 
              rel="noreferrer" 
              download={`${certificate.id}.png`}
              className="cert-ctrl-btn cert-download-btn"
              title="Télécharger / Ouvrir l'image en pleine résolution"
            >
              <Download size={17} />
            </a>

            {/* Close Button */}
            <button 
              type="button" 
              onClick={onClose} 
              className="modal-close-btn" 
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Certificate Viewer Area */}
        <div className="cert-modal-viewer">
          {/* Navigation Arrows */}
          <button 
            type="button" 
            onClick={handlePrev} 
            className="cert-nav-arrow cert-nav-prev"
            title="Certificat précédent (Flèche Gauche)"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="cert-image-stage">
            <div 
              className="cert-image-wrapper"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="cert-modal-img"
              />
            </div>
          </div>

          <button 
            type="button" 
            onClick={handleNext} 
            className="cert-nav-arrow cert-nav-next"
            title="Certificat suivant (Flèche Droite)"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Certificate Meta Bottom Bar */}
        <div className="cert-modal-footer">
          <div className="cert-meta-info">
            <div className="cert-meta-item">
              <Calendar size={15} className="text-yellow" />
              <span>{certificate.validity || certificate.issueDate || "Certifié"}</span>
            </div>
            {certificate.credentialId && (
              <div className="cert-meta-item">
                <Award size={15} className="text-yellow" />
                <span>Identifiant : <code>{certificate.credentialId}</code></span>
              </div>
            )}
            <div className="cert-meta-item">
              <UserCheck size={15} className="text-emerald" />
              <span>Délivré à {certificate.recipient}</span>
            </div>
          </div>

          <div className="cert-footer-actions">
            {certificate.verifyUrl && (
              <a 
                href={certificate.verifyUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={15} />
                <span>{certificate.verifyUrl.includes('coursera') ? 'Vérifier sur Coursera' : 'Vérifier l\'authenticité'}</span>
              </a>
            )}
            <a 
              href={certificate.image} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline btn-sm"
            >
              <ZoomIn size={15} />
              <span>Plein écran original</span>
            </a>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="cert-modal-dots">
          {allCertificates.map((c, i) => (
            <button
              key={c.id}
              type="button"
              className={`cert-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => handleSelectWithReset(c)}
              title={c.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

