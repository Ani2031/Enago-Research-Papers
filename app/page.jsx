"use client";
import React, { useEffect, useState } from "react";
import { fetchPapers } from "../lib/fetchPapers";
import Card from "../components/card";
import SearchBar from "../components/searchBar";
import Pagination from "../components/pagination";

export default function Home() {
  const [papers, setPapers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("title");
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchPapers().then((data) => {
      console.log("API Response:", data);
      setPapers(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    let results = [...papers];

    // Filtering
    if (searchTerm) {
      results = results.filter((p) => {
        let value = "";
        if (category === "title") value = p.papertitle;
        else if (category === "authors") value = p.coauthors;
        else if (category === "journal") value = p.journal?.title || "";
        return String(value).toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    // Sorting
    results.sort((a, b) => {
      let valA, valB;

      if (sortField === "title") {
        valA = a.papertitle?.toLowerCase() || "";
        valB = b.papertitle?.toLowerCase() || "";
      } else if (sortField === "year") {
        valA = a.year || 0;
        valB = b.year || 0;
      } else if (sortField === "impact") {
        valA = a.journal?.impactFactor || 0;
        valB = b.journal?.impactFactor || 0;
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFiltered(results);
  }, [searchTerm, category, sortField, sortOrder, papers]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayed = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      {/* Search Bar */}
      <SearchBar
        {...{
          searchTerm,
          setSearchTerm,
          category,
          setCategory,
        }}
      />

      {/* Sorting */}
      <div className="sort-controls">
        <button
          className={sortField === "title" ? "active" : ""}
          onClick={() => {
            setSortField("title");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Title ({sortField === "title" ? sortOrder.toUpperCase() : "ASC/DESC"})
        </button>

        <button
          className={sortField === "year" ? "active" : ""}
          onClick={() => {
            setSortField("year");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Year ({sortField === "year" ? sortOrder.toUpperCase() : "ASC/DESC"})
        </button>

        <button
          className={sortField === "impact" ? "active" : ""}
          onClick={() => {
            setSortField("impact");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Impact Factor ({sortField === "impact" ? sortOrder.toUpperCase() : "ASC/DESC"})
        </button>

        <button
          className="reset-btn"
          onClick={() => {
            setSortField("");
            setSortOrder("asc");
          }}
        >
          Reset
        </button>
      </div>

      {/* Cards */}
      <div className="card-grid">
        {displayed.length > 0 ? (
          displayed.map((p, i) => <Card key={i} paper={p} />)
        ) : (
          <p className="no-results">No papers found.</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />

      <style jsx>{`
        .sort-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem auto;
          flex-wrap: wrap;
        }
        .sort-controls button {
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          background: #fff;
          cursor: pointer;
          font-size: 14px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.2s;
        }
        .sort-controls button:hover {
          background: #f0f0f0;
        }
        .sort-controls button.active {
          background: #0070f3;
          color: #fff;
          border-color: #005bb5;
          font-weight: 600;
        }
        .sort-controls .reset-btn {
          background: #f8d7da;
          border: 1px solid #f5c2c7;
          color: #842029;
        }
        .sort-controls .reset-btn:hover {
          background: #f1b0b7;
        }

        .card-grid {
          display: grid;
          grid-template-columns: 1fr; /* mobile: single column */
          gap: 1rem;
          justify-items: center;
          padding: 1rem;
        }
        @media (min-width: 600px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr); /* tablet: 2 cols */
          }
        }
        @media (min-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(3, 1fr); /* desktop: 3 cols */
          }
        }
        .no-results {
          grid-column: 1 / -1;
          font-size: 18px;
          color: #555;
        }
      `}</style>
    </div>
  );
}
