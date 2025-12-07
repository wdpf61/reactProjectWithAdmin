import axios from "axios";
import { useState, useEffect } from "react";

export default function CustomerListPaginantion() {
  const [customer, setCustomer] = useState([]);


  const [page, setPage] = useState(1);
  const perPage = 3; // fixed per page
  const [totalPages, setTotalPages] = useState(1);



  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchRoles = async (pageNo) => {

    const res = await axios.get(`${baseUrl}/customer/pagination?page=${pageNo}&perpage=${perPage}`);
    const data = await res.data;
    setCustomer(data.customers);
    setTotalPages(Math.ceil(data.total_records / perPage));

  };

  useEffect(() => {
    fetchRoles(page);
    console.log(page);
    
  }, [page]);

  return (
    <div className="container mt-4">
      <h3>Customer List (Pagination)</h3>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Role Name</th>
          </tr>
        </thead>

        <tbody>
          {customer?.map((c, i) => (
            <tr key={c.id}>

              <td>{(page - 1) * perPage + i + 1}</td>

              <td>{c.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <nav>
        <ul className="pagination">

          {/* Previous */}
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page - 1)}>
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${page === i + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          {/* Next */}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(page + 1)}>
              Next
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
}
