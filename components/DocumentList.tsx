export default function DocumentList() {
  const documents = [
    {
      id: 1,
      title: "Aviso ao Mercado da Oferta de Distribuição Pública",
      filename: "aviso-ao-mercado.pdf"
    },
    {
      id: 2,
      title: "Instrumento Particular de Escritura da 1ª (Primeira) Emissão de Debêntures",
      filename: "escritura-debentures.pdf"
    },
    {
      id: 3,
      title: "Ato Societário",
      filename: "ato-societario.pdf"
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-[--color-neutral-10] mb-8">
        Documentos Disponíveis
      </h2>
      
      <ul className="space-y-4">
        {documents.map((doc) => (
          <li key={doc.id}>
            <a
              href={`/documents/${doc.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-[--color-neutral-2] rounded-lg hover:border-[--color-suno-red] hover:text-[--color-suno-red] transition-colors group"
              aria-label={`Abrir ${doc.title} em nova aba`}
            >
              <svg
                className="w-6 h-6 flex-shrink-0 mt-0.5 text-[--color-neutral-5] group-hover:text-[--color-suno-red] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-[--color-neutral-8] group-hover:text-[--color-suno-red] transition-colors">
                {doc.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

