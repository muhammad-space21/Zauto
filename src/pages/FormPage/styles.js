import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: table;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.61);
  z-index: 888;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Component = styled.div`
  width: 70%;
  height: 70%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Col1 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
    @media screen and (max-width: 900px) {
      display: none;
    }
`;

export const Col2 = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FEFEFE;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	margin-left: auto;
	margin-right: 15px;
	margin-top: 15px;
		img {
			width: 30px;
			height: 30px;
			&:hover {
				cursor: pointer;
			}
		}
`;