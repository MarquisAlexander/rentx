import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { Calendar } from "../../components/Calendar";

import {
	Container,
	Header,
	Title,
	RentalPeriod,
	DateInfo,
	DateTitle,
	DateValue,
	Content,
	Footer,
} from "./styles";

import ArrowSvf from "../../assets/arrow.svg";
import { Button } from "../../components/Button";

export function Scheduling() {
	const theme = useTheme();

	return (
		<Container>
			<Header>
				<StatusBar
					barStyle="light-content"
					translucent
					backgroundColor="transparent"
				/>
				<BackButton onPress={() => {}} color={theme.colors.shape} />
				<Title>
					Escolha uma{`\n`}data de início e{`\n`}fim do aluguel
				</Title>

				<RentalPeriod>
					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue selected={false}>18/08/2022</DateValue>
					</DateInfo>

					<ArrowSvf />

					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue selected={false}>18/08/2022</DateValue>
					</DateInfo>
				</RentalPeriod>
			</Header>

			<Content>
				<Calendar />
			</Content>
			<Footer>
				<Button title="Confirmar" onPress={() => console.log("aqui")} />
			</Footer>
		</Container>
	);
}
