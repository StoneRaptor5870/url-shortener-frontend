import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewUrlComponent = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrlAndSetUrl = async () => {
      const result = await axios.get(
        "https://url-shortener-backend-lake.vercel.app/all"
      );
      setUrls(result.data.urls);
    };
    fetchUrlAndSetUrl();
  }, [urls]);

  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Original Url</th>
            <th>Short Url</th>
            <th>Click Count</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, idx) => (
            <tr key={idx}>
              <td>{url.originalUrl}</td>
              <td>
                <a
                  href={`${url.shortUrl}`}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {url.shortUrl}
                </a>
              </td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUrlComponent;
