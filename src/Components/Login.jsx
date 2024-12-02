

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-md rounded-md p-8 w-96">
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/logo.svg"
            alt="Logo ITK"
            className="h-16"
          />
        </div>
        <h2 className="text-center text-lg font-semibold text-blue-700 mb-6">
          Institut Teknologi Kalimantan
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="nim" className="block text-sm font-medium text-gray-600">
              NIM / NIP / Surel
            </label>
            <input
              type="text"
              id="nim"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan NIM atau email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan kata sandi"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Ingat username
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Lupa kata sandi Anda?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Masuk
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Cookies harus diaktifkan pada peramban Anda
          </p>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Masuk menggunakan akun Anda pada:</p>
            <button className="flex items-center justify-center w-full border py-2 rounded-md hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="h-5 mr-2"
              />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
