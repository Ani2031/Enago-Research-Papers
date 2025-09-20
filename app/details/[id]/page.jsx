import { fetchPapers } from "../../../lib/fetchPapers";

const containerStyle = {
  maxWidth: "800px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  lineHeight: "1.6",
};

const backButtonStyle = {
  display: "inline-block",
  marginBottom: "1.5rem",
  color: "#2d6cdf",
  textDecoration: "none",
  fontWeight: "500",
};

const titleStyle = {
  fontSize: "1.8rem",
  marginBottom: "1rem",
  color: "#222",
};

const metadataStyle = {
  marginBottom: "1.5rem",
};

const linkStyle = {
  color: "#2d6cdf",
  textDecoration: "underline",
};

const pdfButtonStyle = {
  display: "inline-block",
  padding: "0.6rem 1.2rem",
  background: "#2d6cdf",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "500",
  marginBottom: "1.5rem",
};

const detailsStyle = {
  marginTop: "1.5rem",
};

const summaryStyle = {
  cursor: "pointer",
  fontWeight: "500",
};

const preStyle = {
  background: "#f7f7f7",
  padding: "1rem",
  borderRadius: "8px",
  overflowX: "auto",
  marginTop: "0.5rem",
};

const notFoundStyle = {
  padding: "2rem",
  textAlign: "center",
  fontSize: "18px",
};

export default async function Details({ params }) {
  const papers = await fetchPapers();
  const paper = papers.find((p) => String(p.id) === params.id);

  if (!paper) {
    return (
      <div style={notFoundStyle}>
        <p>Paper not found</p>
        <a href="/" style={linkStyle}>
          ⬅ Back to List
        </a>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Back Button */}
      <a href="/" style={backButtonStyle}>
        ⬅ Back
      </a>

      {/* Title */}
      <h1 style={titleStyle}>{paper.papertitle}</h1>

      {/* Metadata */}
      <div style={metadataStyle}>
        <p>
          <strong>Authors:</strong> {paper.coauthors}
        </p>
        <p>
          <strong>Year:</strong> {paper.published_at.slice(0, 4)}
        </p>
        <p>
          <strong>Journal:</strong> {paper.journal.title}
        </p>
        <p>
          <strong>DOI:</strong>{" "}
          <a
            href={paper.articlelink}
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            {paper.articlelink}
          </a>
        </p>
        <p>
          <strong>Impact Factor:</strong> {paper.impact_factor}
        </p>
      </div>

      {/* PDF Link */}
      {paper.pdf_link && (
        <a href={paper.pdf_link} target="_blank" rel="noreferrer" style={pdfButtonStyle}>
          📄 Download PDF
        </a>
      )}

      {/* Raw JSON Debug (optional) */}
      <details style={detailsStyle}>
        <summary style={summaryStyle}>View Raw Metadata</summary>
        <pre style={preStyle}>{JSON.stringify(paper, null, 2)}</pre>
      </details>
    </div>
  );
}
