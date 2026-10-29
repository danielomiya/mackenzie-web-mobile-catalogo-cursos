interface CursoCardProps {
  nome: string;
  professor: string;
  cargaHoraria: number;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
}

export default function CursoCard({ nome, professor, cargaHoraria, nivel }: CursoCardProps) {
  return (
    <div className="curso-card">
      <h3 className="curso-nome">{nome}</h3>
      <p className="curso-info">
        <strong>Professor:</strong>
        {professor}
      </p>
      <p className="curso-info">
        <strong>Carga Horária:</strong>
        {cargaHoraria} horas
      </p>
      <span className="tag-nivel">{nivel}</span>
    </div>
  );
}
