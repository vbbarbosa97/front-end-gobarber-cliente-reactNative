import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MaterialIcons } from '@expo/vector-icons';

import { 
    Container, 
    DateButton, 
    DateText,
    Picker,
} from './styles';

export default function DateInput({ date, onChange }) {
    const [opened, setOpened] = useState(false);

    const dateFormatted = useMemo( () => 
        format(date, "dd 'de' MMMM 'de' yyyy", { Locale: pt }), 
        [date]
    );

    return (
        <Container>
            <DateButton onPress={() => setOpened(!opened)}>
                <MaterialIcons name='event' size={20} color="#FFF" />
                <DateText>{dateFormatted}</DateText>
            </DateButton>

            {
                opened && (
                    <Picker>
                        <DatePickerIOS 
                        date={date}
                        onDateChange={onChange}
                        minimumDate={new Date()}
                        minuteInterval={60}
                        locale="pt"
                        mode="date"
                        />
                    </Picker> 
                )
            }
        </Container>
  );
}
