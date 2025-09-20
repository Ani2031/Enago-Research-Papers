"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/style.scss";

export default function Card({ paper }) {
  const detailsLink = {
    background: "#1d4ed8",
    color: "white",
    padding: "0.5rem 0.5rem",
    borderRadius: "0.25rem",
    textDecoration: "none",
    fontSize: "0.875rem",
  }

  return (
    <div className="card">
      <div className="card-left">
        <div className="image-wrapper">
          <Image
            src={paper.journal?.journalimage}
            alt={paper.journal?.title || "Journal Image"}
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>
        <span className="impact-factor">
          IF {paper.journal.impactfactor ?? "N/A"}
        </span>
      </div>

      <div className="card-right">
        <div className="text-content">
          <h3 className="title">{paper.papertitle || "Untitled"}</h3>
          <p className="authors">
            <strong>Author:</strong> {paper.coauthors || "N/A"}
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
              className="doi-link"
            >
              Link
            </a>
          </p>
        </div>

        <div className="actions">
          <Link href={`/details/${paper.id}`} style={detailsLink}>
            View Details
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          padding: 1rem;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          height: 300px;
          overflow: hidden;
        }

        .card-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          width: 150px;
          flex-shrink: 0;
        }

        .image-wrapper {
          width: 150px;
          height: 150px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .impact-factor {
          background: #e0f2ff;
          color: #1d4ed8;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }

        .card-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
          overflow: hidden;
        }

        .title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          word-break: break-word;
        }

        .authors {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          word-break: break-word;
        }

        .actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .doi-link {
          color: #2d6cdf;
          text-decoration: underline;
        }

        /* Mobile adjustments */
        @media (max-width: 600px) {
          .card {
            grid-template-columns: 1fr;
            height: auto;
          }

          .card-left {
            width: 100%;
            flex-direction: row;
            justify-content: flex-start;
            gap: 1rem;
          }

          .image-wrapper {
            width: 100px;
            height: 100px;
          }

          .title {
            font-size: 1rem; /* smaller title */
          }

          .authors,
          p {
            font-size: 0.875rem; /* smaller text */
          }

          .details-link {
            font-size: 0.75rem;
            padding: 0.4rem 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}
