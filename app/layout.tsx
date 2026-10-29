import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Catálogo de Cursos',
  description: 'Catálogo de Cursos Semestrais em Computação',
  authors: [{ name: 'Daniel Omiya' }],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
