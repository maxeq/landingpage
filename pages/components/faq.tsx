// components/FAQ.tsx
import { useState } from 'react';
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import styled from 'styled-components';

type FAQProps = {
  id: number;
  activeId: number | null;
  question: string;
  answer: string;
  setActiveId: (id: number | null) => void;
};

const FAQ = ({ id, activeId, question, answer, setActiveId }: FAQProps) => {
  const isOpen = activeId === id;

  const handleClick = () => {
    setActiveId(isOpen ? null : id);
  };

  return (
    <FAQContainer isOpen={isOpen}>
      <Header onClick={handleClick}>
        {question}
        <IconWrapper>{isOpen ? <HiOutlineChevronUp className="text-[#00B894]" /> : <HiOutlineChevronDown className='text-[#C8C8C8]' />}</IconWrapper>
      </Header>
      {isOpen && <hr className="border-[#F3F3F3] my-2" />}
      <Answer open={isOpen}>{answer}</Answer>
    </FAQContainer >
  );
};

export default FAQ;

const FAQContainer = styled.div<{ isOpen: boolean }>`
  background: #FFFFFF;
  border: 1px solid ${({ isOpen }) => (isOpen ? "#00B894" : "#F3F3F3")};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  color: #000000;
  radius: 8px;
`;

const Header = styled.div`
  display: flex;
  font-weight: 800;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
`;

const Answer = styled.p<{ open: boolean }>`
  max-height: ${({ open }) => (open ? '1000px' : '0')};
  overflow: hidden;
  margin-top: ${({ open }) => (open ? '1rem' : '0')};
  line-height: 1.6;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

