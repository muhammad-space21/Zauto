import styled from 'styled-components';

export const StyledSignUpPage = styled.div`
	width: fit-content;
	height: fit-content;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	padding-top: 50px;
`;

export const FormStyled = styled.form`
	width: 100%;
	margin-top: 30px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

export const Input = styled.input`
	width: 350px;
	height: 40px;
	border: 1px solid #CCCCCC;
	margin-top: 12px;
	margin-bottom: 12px;
	border-radius: 3px;

    &::placeholder {
			font-size: 14px;
			color: #CCCCCC;
			font-weight: 400;
			line-height: normal;
			text-indent: 10px;
    }
    &:hover {
			cursor: pointer;
			border: 2px solid #523FDC;
			&::placeholder {
				color: #523FDC;
			}
    }
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.span`
    font-size: 15px;
    font-weight: 400;
    padding-left: 10px;
    color: white;
    span {
        color: #77D89E;
        font-weight: 500;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Heading = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    color: white;
    @media screen and ( max-width: 710px ) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const ErrorMessage = styled.div`
    width: 350px;
    font-size: 14px;
    line-height: 20px;
    color: red;
    text-align: left;
`;

export const Container = styled.div`
    margin-top: 30px;
`;
