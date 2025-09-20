"use client";

export default function SearchBar({
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
}) {
    const containerStyle = {
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
        background: "#f4f6f9",
        borderRadius: "8px",
        margin: "1rem auto",
        maxWidth: "600px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        flexWrap: "wrap",
    };

    const inputStyle = {
        flex: 1,
        padding: "0.5rem 0.75rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "14px",
        minWidth: "160px",
    };

    const selectStyle = {
        padding: "0.5rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px",
        backgroundColor: "white",
        cursor: "pointer",
    };

    return (
        <div style={containerStyle}>
            {/* Search Input */}
            <input
                type="text"
                placeholder={`Search by ${category}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={inputStyle}
            />

            {/* Category Filter */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={selectStyle}
            >
                <option value="title">Title</option>
                <option value="authors">Authors</option>
                <option value="journal">Journal</option>
            </select>
        </div>
    );
}
