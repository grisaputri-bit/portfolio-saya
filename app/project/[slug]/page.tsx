import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="coming-soon-page">
      <div className="coming-soon-content">

        <p className="coming-soon-label">
          PROJECT / {slug.toUpperCase()}
        </p>

        <h1>
          Coming <span>soon.</span>
        </h1>

        <p className="coming-soon-description">
          This project is currently under development.
          <br />
          Please stay tuned. ♡
        </p>

        <Link
          href="/#projects"
          className="coming-soon-back"
        >
          ← Back to Projects
        </Link>

      </div>
    </main>
  );
}