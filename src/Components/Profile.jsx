const ProfilePage = () => {
  // Data profil
  const profileData = {
    name: "Muhammad Aldiansyah",
    email: "11211054@student.itk.ac.id",
    nip: "123456789",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "1rem" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#0056a2", color: "#fff", padding: "1.5rem", borderRadius: "8px" }}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>{profileData.name}</h1>
      </div>
      <div style={{ marginTop: "1rem", display: "flex", gap: "1 rem" }}>
        {/* User Details */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            flex: 1,
          }}
        >
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#0056a2" }}>User Details</h2>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong>Email address:</strong> {profileData.email}
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong>NIP:</strong> {profileData.nip}
          </p>
          <a href="#edit-profile" style={{ color: "#0056a2", textDecoration: "none" }}>
            Edit profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
