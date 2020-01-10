import React from 'react';
import styled from 'styled-components';
import { times } from 'lodash';
import PropTypes from 'prop-types';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Row } from 'react-bootstrap';

const PagerContainer = styled(Row)`
  display: flex;
`;

const PagerButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid #aaa;
  border-right: none;
  background-color: ${props => (!!props.isActive ? '#aaa' : '#ffffff')};
  font-size: 16px;
  color: ${props => (!!props.isActive ? '#ffffff' : '#212121')};
  cursor: pointer;

  &:hover {
    background-color: #aaa;
    color: #fff;
  }

  &:last-child,
  &:first-child {
    & > svg {
      fill: #212121;
    }

    &:hover {
      & > svg {
        background-color: #aaa;
        fill: #fff;
      }
    }
  }

  &:last-child {
    border-radius: 0px 3px 3px 0px;
    border-right: 1px solid #aaa;
  }

  &:first-child {
    border-radius: 3px 0px 0px 3px;
  }

  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
`;

const PrevPageButton = ({ goToPrev }) => {
  return (
    <PagerButton onClick={goToPrev}>
      <FaAngleDoubleLeft size="10px"></FaAngleDoubleLeft>
    </PagerButton>
  );
};

const NextPageButton = ({ goToNext }) => {
  return (
    <PagerButton onClick={goToNext}>
      <FaAngleDoubleRight size="10px"></FaAngleDoubleRight>
    </PagerButton>
  );
};

const Pagination = ({ setPage, currentPage, pageCount }) => {
  const pages = times(pageCount, Number);

  return (
    <PagerContainer className="mt-5" noGutters>
      {/* Previous Button */}
      <PrevPageButton
        goToPrev={() => {
          if (currentPage !== 0) {
            setPage(currentPage - 1);
          }
        }}
      />
      {/* Pages */}
      {pages.map(pageNum => {
        const maxButtons = 5;
        const isActive = pageNum === currentPage;
        const offset = Math.max(0, currentPage + 2 - maxButtons);
        const lastPage = offset + maxButtons - 1;
        if (pageNum >= offset && pageNum <= lastPage) {
          return (
            <PagerButton
              key={pageNum}
              isActive={isActive}
              onClick={() => setPage(pageNum)}>
              {pageNum + 1}
            </PagerButton>
          );
        } else {
          return null;
        }
      })}
      {/* Next Button */}
      <NextPageButton
        goToNext={() => {
          if (currentPage + 1 !== pageCount) {
            setPage(currentPage + 1);
          }
        }}
      />
    </PagerContainer>
  );
};

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number
};

export default Pagination;
