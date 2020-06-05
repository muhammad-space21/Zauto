import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';


export const ContainerStyled = styled.div`
	width: 100%;
	height: 100%;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormStyled = styled.form`
	width: 80%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
`;

export const Checkbox = styled.input`
	width: 50px;
	height: 20px;
		&:hover {
			cursor: pointer;
		}
`;

export const LinkToPolicy = styled(Link)`
	font-size: 15px;
	font-weight: 500;
	color: grey;
	&:hover {
		color: black;
		cursor: pointer;
	}
`;

export const Input = styled.input`
	width: 80%;
	height: 45px;
	border: 2px solid #b2bec3;
	margin-top: 12px;
	margin-bottom: 12px;
	border-radius: 8px;
	outline: none;
	margin-left: auto;
	margin-right: auto;
	&::placeholder {
		font-size: 15px;
		color: #CCCCCC;
		font-weight: 400;
		line-height: normal;
		text-indent: 10px;
	}
	&:hover {
		cursor: pointer;
		border: 2px solid #00AF66;
		&::placeholder {
			color: #00AF66;
		}
	}
	@media screen and (max-width: 450px) {
		width: 100%;
	}
`;

export const InputTel = styled(MaskedInput)`
	width: 80%;
	height: 45px;
	border: 2px solid #b2bec3;
	margin-top: 12px;
	margin-bottom: 12px;
	border-radius: 8px;
	outline: none;
	margin-left: auto;
	margin-right: auto;
	&::placeholder {
		font-size: 15px;
		color: #CCCCCC;
		font-weight: 400;
		line-height: normal;
		text-indent: 10px;
	}
	&:hover {
		cursor: pointer;
		border: 2px solid #00AF66;
		&::placeholder {
			color: #00AF66;
		}
	}
	@media screen and (max-width: 450px) {
		width: 100%;
	}
`;

export const Wrapper = styled.div`
	width: 80%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10px;
	@media screen and (max-width: 450px) {
		width: 100%;
	}
`;

export const Heading = styled.span`
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 30px;
	color: #2d3436;
	@media screen and ( max-width: 710px ) {
		font-size: 20px;
		line-height: 30px;
	}
`;

export const ErrorMessage = styled.div`
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	@media screen and (max-width: 450px) {
		width: 100%;
	}

`;

export const Error = styled.div`
	width: fit-content;
	font-size: 12px;
	line-height: 14px;
	color: #FC573B;
	border-radius: 5px;
	background-color: #FFE6E2;
	padding: 4px;
	margin-right: auto;
`;

export const MessageOptional = styled.h1`
	font-size: 13px;
	font-style: italic;
	color: #cccccc;
	margin-left: auto;
	margin-right: 5px;
	margin-bottom: 20px;
`;
