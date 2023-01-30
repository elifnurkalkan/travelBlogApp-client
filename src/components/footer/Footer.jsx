import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="madeBy">
        <small>
          &copy; 2022 Made by
          <a
            href="https://github.com/elifnurkalkan"
            target="_blank"
            rel="noreferrer"
          >
            <span> elifnkalkan</span>
          </a>
        </small>
      </div>
    </div>
  );
}
