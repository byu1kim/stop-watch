import styled from "styled-components";

const Btn = styled.button`
  background-color: skyblue;
`;

const Time = ({ time }) => {
  return (
    <>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </>
  );
};

export default Time;
