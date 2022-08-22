import React from "react";
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
	About,
	Acessories,
	Footer,
} from "./styles";

export function CarDetails() {
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

				<About>
					esse aqui é um texto qualquer para testar o tamanho da fonte e como
					vai ficar os styles na ui
				</About>
			</Content>

			<Footer>
				<Button title="Confirmar" />
			</Footer>
		</Container>
	);
}
