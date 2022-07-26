import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Calendar as CustomCalendar } from "react-native-calendars";

export function Calendar() {
	const theme = useTheme();
	return (
		<CustomCalendar
			renderArrow={(direction) => (
				<Feather
					size={24}
					color={theme.colors.shape}
					name={direction == "left" ? "chevron-left" : "chevron-right"}
				/>
			)}
		/>
	);
}
