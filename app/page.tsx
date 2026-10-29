import Categoria from "./components/Categoria";
import CursoCard from "./components/CursoCard";

export default function Home() {
  return (
    <main>
      <h1 className="titulo-principal">Catálogo de Cursos de Computação</h1>
      <Categoria titulo="Desenvolvimento Web e Mobile">
        <CursoCard
          nome="Fundamentos de React e Next.js"
          professor="Alcides"
          cargaHoraria={40}
          nivel="Iniciante"
        />
        <CursoCard
          nome="APIs em Node.js e NestJS"
          professor="Alexandre"
          cargaHoraria={60}
          nivel="Intermediário"
        />
      </Categoria>

      <Categoria titulo="Arquitetura e Sistemas Distribuídos">
        <CursoCard
          nome="Comunicação com gRPC e Sockets"
          professor="Alcides"
          cargaHoraria={80}
          nivel="Avançado"
        />
        <CursoCard
          nome="Lógica em Python e C++"
          professor="Debora"
          cargaHoraria={40}
          nivel="Iniciante"
        />
        <CursoCard
          nome="Containers com Docker"
          professor="Thiago"
          cargaHoraria={30}
          nivel="Intermediário"
        />
      </Categoria>

      <Categoria titulo="Cursos de Extensão">
        <p style={{ color: "#666", gridColumn: "1 / -1" }}>
          As matrículas para os cursos de extensão e maratona de programação
          abrem no próximo semestre. Fiquem atentos!
        </p>
      </Categoria>
    </main>
  );
}
