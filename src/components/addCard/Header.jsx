import React from 'react'

const Header = ({history}) => {
  return (
    <div>
      <h2 className="page-title">
        <span onClick={() => history('/')}>&lt; </span>
        카드 추가
      </h2>
    </div>
  );
}

export default Header
