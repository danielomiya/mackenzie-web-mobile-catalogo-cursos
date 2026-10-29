interface CursoCardProps {
  nome: string;
  professor: string;
  cargaHoraria: number;
  nivel: string;
  modalidade: 'Presencial' | 'EAD';
}

export default function CursoCard({
  nome,
  professor,
  cargaHoraria,
  nivel,
  modalidade,
}: CursoCardProps) {
  return (
    <div className="curso-card">
      <h3 className="curso-nome">{nome}</h3>
      <p className="curso-info">
        <strong>Professor:</strong> {professor}
      </p>
      <p className="curso-info">
        <strong>Carga Horária:</strong> {cargaHoraria} horas
      </p>
      <p className="curso-info">
        <strong>Modalidade:</strong> {modalidade}
      </p>
      <span className="tag-nivel">{nivel}</span>
    </div>
  );
}
