import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hirwa Pagination</h1>
      <br />

      <span>
        <a href=""> &#8592; </a>
        <a href=""> 1 </a>
        <a href=""> 2</a>
        <a href=""> 3 </a>
        <a href="" class="active">
          {' '}
          4{' '}
        </a>
        <a href=""> 5 </a>
        <a href=""> 6 </a>
        <a href=""> &#8594; </a>
      </span>
    </div>
  );
}
