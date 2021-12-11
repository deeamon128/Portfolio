import React from 'react';
import { Link, Router } from 'react-router-dom';
import styled from 'styled-components';

export default function Button({ btnLink, btnText }) {
  return (
    <div>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </div>
  );
}
