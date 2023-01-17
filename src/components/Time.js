import styled from "styled-components";

const Btn = styled.button`
  background-color: skyblue;
`;

const Time = ({ time }) => {
  return (
    <>
      <div className="time">
        <div className="num">
          {"0" + Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}
        </div>
        <div className="colon">:</div>
        <div className="num">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
        </div>
        <div className="colon">:</div>
        <div className="num">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </div>
        {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
      </div>
    </>
  );
};

export default Time;
