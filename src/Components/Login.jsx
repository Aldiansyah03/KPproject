import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginPage = () => {
  const navigate = useNavigate(); // Untuk navigasi antar halaman

  const handleLogin = (e) => {
    e.preventDefault();
    // Langsung arahkan ke halaman Home tanpa memeriksa login
    navigate("/home"); // Redirect ke halaman Home
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <img
            src="src/assets/logo.svg" // Ganti dengan jalur logo Anda
            alt="Logo ITK"
            className="mx-auto w-64 mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-700">
            Sistem inventaris UPT TIK
          </h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              NIM / NIP / Surel
            </label>
            <input
              type="text"
              id="username"
              className="bg-white mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan NIM/NIP/Surel"
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="bg-white mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Kata Sandi"
              disabled
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Lupa kata sandi Anda?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
