const SkillSection = ({ title, items }) => (
  <div style={{ marginBottom: "2rem" }}>
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-center mb-3">{title}</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {items?.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              gap: "0.5rem",
              textAlign: "center",
              color: "#333",
              fontWeight: "500",
              padding: "0.5rem",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              width: "150px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              // e.currentTarget.style.backgroundColor = "#e0f7fa";
              e.currentTarget.style.color = "#00796b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
              // e.currentTarget.style.backgroundColor = "#f9f9f9";
              e.currentTarget.style.color = "#333";
            }}
          >
            <img
              src={item.icon}
              alt={item.name}
              style={{ width: "50px", height: "50px" }}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkillSection;

