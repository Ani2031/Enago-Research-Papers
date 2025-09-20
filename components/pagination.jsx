"use client";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const buttonStyle = {
        padding: "0.5rem 1rem",
        margin: "0 0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f0f0f0",
        cursor: "pointer",
        fontWeight: "bold",
    };

    const disabledButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#e0e0e0",
        color: "#999",
        cursor: "not-allowed",
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        gap: "0.5rem",
        fontFamily: "Arial, sans-serif",
    };

    const pageInfoStyle = {
        margin: "0 1rem",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyle}>
            <button
                style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Prev
            </button>

            <span style={pageInfoStyle}>
                {currentPage} / {totalPages}
            </span>

            <button
                style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}
