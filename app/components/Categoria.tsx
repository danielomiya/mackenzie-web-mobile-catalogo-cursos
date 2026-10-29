interface CategoriaProps {
    titulo: string;
    children: React.ReactNode;
}

export default function Categoria({ titulo, children }: CategoriaProps) {
  return (
    <section className="categoria-section">
      <h2 className="categoria-titulo">{titulo}</h2>
      <div className="grid-cursos">{children}</div>
    </section>
  );
}
