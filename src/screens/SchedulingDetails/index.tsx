import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
	Container,
	Header,
	CarImages,
	Content,
	Details,
	Description,
	Brand,
	Name,
	Rent,
	Period,
	Price,
	Acessories,
	Footer,
	RentalPeriod,
	CalendarIcon,
	DateInfo,
	DateTitle,
	DateValue,
	RentalPrice,
	RentalPriceLabel,
	RentalPricaDetails,
	RentalPriceQuota,
	RentalPriceTotal,
} from "./styles";

export function SchedulingDetails() {
	const theme = useTheme();
	return (
		<Container>
			<Header>
				<BackButton onPress={() => {}} />
			</Header>

			<CarImages>
				<ImageSlider
					imagesUrl={["https://www.pngmart.com/files/1/Audi-A7-S-Line-PNG.png"]}
				/>
			</CarImages>

			<Content>
				<Details>
					<Description>
						<Brand>Lamborguini</Brand>
						<Name>Huracan</Name>
					</Description>

					<Rent>
						<Period>Ao dia</Period>
						<Price>R$ 500</Price>
					</Rent>
				</Details>

				<Acessories>
					<Accessory name="380Km/h" icon={speedSvg} />
					<Accessory name="3.2s" icon={accelerationSvg} />
					<Accessory name="800hp" icon={forceSvg} />
					<Accessory name="Gasolina" icon={gasolineSvg} />
					<Accessory name="Auto" icon={exchangeSvg} />
					<Accessory name="2 pessoas" icon={peopleSvg} />
				</Acessories>

				<RentalPeriod>
					<CalendarIcon>
						<Feather
							name="calendar"
							size={RFValue(23)}
							color={theme.colors.shape}
						/>
					</CalendarIcon>
					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue>18/06/2021</DateValue>
					</DateInfo>
					<Feather
						name="chevron-right"
						size={RFValue(23)}
						color={theme.colors.text}
					/>

					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue>18/06/2021</DateValue>
					</DateInfo>
				</RentalPeriod>

				<RentalPrice>
					<RentalPriceLabel>TOTAL</RentalPriceLabel>
					<RentalPricaDetails>
						<RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
						<RentalPriceTotal>R$ 2.900</RentalPriceTotal>
					</RentalPricaDetails>
				</RentalPrice>
			</Content>

			<Footer>
				<Button title="Confirmar" onPress={() => {}} />
			</Footer>
		</Container>
	);
}
