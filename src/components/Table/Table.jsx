import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './table.css';

export default function Table({ Url }) {
  const EventManager = async (e) => {
    // e.preventDefault(); // Kept for potential future use
  };

  const shorturlHandler = async (url) => {
    try {
      console.log('clickedd');
      console.log(url);
      const fullLink = await axios.get('/shorturls/' + url.short);
      window.location.href = fullLink.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Full URL</th>
            <th scope="col">Short URL</th>
            <th scope="col">Notes</th>
            <th scope="col">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {Url.map((url, index) => (
            <tr key={index}>
              <td className="fullUrl">
                <a href={url.full} target="_blank" rel="noopener noreferrer">
                  {url.full}
                </a>
              </td>
              <td
                className="shortUrl"
                onClick={() => {
                  EventManager();
                  shorturlHandler(url);
                }}
              >
                <Link>{url.short}</Link>
              </td>
              <td>{url.note}</td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
