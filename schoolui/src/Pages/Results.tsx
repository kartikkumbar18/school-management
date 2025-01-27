import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'


function Results() {

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="pt-16 pb-16 flex justify-center items-center min-h-screen bg-gray-100">
        {/* Form Section */}
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">View Results:</h2>

          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <select  className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="">Academic Year</option>
                <option value="2020-2021">2020-2021</option>
                <option value="2021-2022">2021-2022</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2023-2024">2023-2024</option>
              </select>
            </div>
            <div className="flex-1">
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="">Class</option>
                <option value="1A">1A</option>
                <option value="1B">1B</option>
                <option value="2A">2A</option>
                <option value="2B">2B</option>
                <option value="3A">3A</option>
                <option value="3B">3B</option>
                <option value="4A">4A</option>
                <option value="4B">4B</option>
                <option value="5A">5A</option>
                <option value="5B">5B</option>
                <option value="6A">6A</option>
                <option value="6B">6B</option>
                <option value="7A">7A</option>
                <option value="7B">7B</option>
                <option value="8A">8A</option>
                <option value="8B">8B</option>
                <option value="9A">9A</option>
                <option value="9B">9B</option>
                <option value="10A">10A</option>
                <option value="10B">10B</option>
              </select>
            </div>
            <div className="flex-1">
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="">Exam</option>
                <option value="Mathematics">First Semester</option>
                <option value="Science">Second Semester</option>
                <option value="English">Final</option>
              </select>
            </div>
          </div>

          {/* Find Button */}
          <div className="mt-6">
            <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
              Find
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-200  text-center z-10">
        <Footer />
      </div>
    </>
  )
}

export default Results;
