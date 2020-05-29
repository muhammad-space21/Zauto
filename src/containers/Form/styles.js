import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';


export const ContainerStyled = styled.div`
	width: fit-content;
	height: fit-content;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	padding-bottom: 30px;
`;

export const FormStyled = styled.form`
	width: 100%;
	margin-top: 30px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: auto;
	margin-left: 5px;
		&:hover {
			cursor: pointer;
		}
`;

export const LinkToPolicy = styled(Link)`
	font-size: 15px;
	font-weight: 500;
	margin-right: auto;
	margin-left: -195px;
	color: grey;
	&:hover {
		color: black;
		cursor: pointer;
		text-decoration: none;
	}
`;

export const Input = styled.input`
	width: 350px;
	height: 45px;
	border: 2px solid #b2bec3;
	margin-top: 12px;
	margin-bottom: 12px;
	border-radius: 8px;
	outline: none;

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
`;

export const InputTel = styled(InputMask)`
	width: 350px;
	height: 45px;
	border: 2px solid #b2bec3;
	margin-top: 12px;
	margin-bottom: 12px;
	border-radius: 8px;
	outline: none;

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
`;

export const InputWrapper = styled.div`
	width: 350px;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Wrapper = styled.div`
	width: 170px;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const Select = styled.select`
	width: 170px;
	height: 40px;
	border: 2px solid #b2bec3;
	border-radius: 8px;
	outline: none;
	font-size: 15px;
	color: #CCCCCC;
	font-weight: 400;
	line-height: normal;
	text-indent: 10px;
	margin-top: 12px;
	margin-bottom: 12px;

	&:hover {
		cursor: pointer;
		background-color: white;
		color: #00AF66;
		border-color: #00AF66;
		&::placeholder {
			color: #00AF66;
		}
	}
`;

export const SelectLong = styled.select`
	width: 350px;
	height: 45px;
	border: 2px solid #b2bec3;
	border-radius: 8px;
	outline: none;
	font-size: 15px;
	color: #CCCCCC;
	font-weight: 400;
	line-height: normal;
	text-indent: 10px;
	margin-top: 12px;
	margin-bottom: 12px;
	&:hover {
		cursor: pointer;
		background-color: white;
		color: #00AF66;
		border-color: #00AF66;
		&::placeholder {
			color: #00AF66;
		}
	}
`;

export const Option = styled.option`
	width: 350px;
	height: 40px;
	border: none;
	border-radius: 3px;
	outline: none;
	font-size: 16px;
	padding: 20px;
	color: black;
	font-weight: 400;
	line-height: normal;
	text-indent: 10px;
	background-color: white;
	
	&:hover {
		cursor: pointer;
		outline: none;
		background-color: white;
		&::placeholder {
			color: #00AF66;
		}
	}
`;

export const OptionWhite = styled.option`
	width: 170px;
	height: 40px;
	border: none;
	border-radius: 3px;
	outline: none;
	font-size: 16px;
	padding: 20px;
	color: black;
	font-weight: 400;
	line-height: normal;
	text-indent: 10px;
	background-color: white;
	
	&:hover {
		cursor: pointer;
		outline: none;
		background-color: white;
		&::placeholder {
			color: #00AF66;
		}
	}
`;

export const OptionBlack = styled.option`
	width: 170px;
	height: 40px;
	border: none;
	border-radius: 3px;
	outline: none;
	font-size: 16px;
	padding: 20px;
	color: white;
	font-weight: 400;
	line-height: normal;
	text-indent: 10px;
	background-color: black;
	
	&:hover {
		cursor: pointer;
		outline: none;
		background-color: black;
		&::placeholder {
			color: white;
		}
	}
`;

export const OptionGrey = styled.option`
	width: 170px;
	height: 40px;
	border: none;
	border-radius: 3px;
	outline: none;
	font-size: 16px;
	padding: 20px;
	color: black;
	font-weight: 400;
	line-height: normal;
	text-indent: 10px;
	background-color: grey;
	
	&:hover {
		cursor: pointer;
		outline: none;
		background-color: grey;
		&::placeholder {
			color: black;
		}
	}
`;

export const OptionRed = styled.option`
	width: 170px;
	height: 40px;
	border: none;
	border-radius: 3px;
	outline: none;
	font-size: 16px;
	padding: 20px;
	color: black;
	font-weight: 400;
	line-height: normal;
	text-indent: 10px;
	background-color: red;
	
	&:hover {
		cursor: pointer;
		outline: none;
		background-color: red;
		&::placeholder {
			color: black;
		}
	}
`;




export const TextWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

export const Title = styled.span`
	font-size: 18px;
	font-weight: 400;
	padding-left: 10px;
	color: #2d3436;
	span {
		color: #77D89E;
		font-weight: 500;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const Heading = styled.span`
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 10px;
	color: #2d3436;
	@media screen and ( max-width: 710px ) {
		font-size: 20px;
		line-height: 30px;
	}
`;

export const ErrorMessage = styled.div`
	width: 350px;
	font-size: 14px;
	line-height: 16px;
	color: red;
	text-align: left;
`;

export const MessageOptional = styled.h1`
	font-size: 13px;
	font-style: italic;
	color: #cccccc;
	margin-left: auto;
	margin-right: 5px;
	margin-bottom: 20px;
`;
