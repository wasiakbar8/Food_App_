import { CustomInputProps } from "@/type";
import cn from "clsx";
import { useState } from "react";
import { Text, TextInput, View } from 'react-native';

const CustomInput = ({
    placeholder = 'Enter text',
    value,
    onChangeText,
    label,
    secureTextEntry = false,
    keyboardType="default"
}: CustomInputProps) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View className="w-full">
            <Text className="label">{label}</Text>
            <Text className="text-red-500 rounded-lg p-3 w-full text-base font-quicksand-semibold  border-b leading-5">Testing</Text>

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                placeholderTextColor="#888"
                className={cn('rounded-lg p-3 w-full text-base font-quicksand-semibold text-dark-100 border-b leading-5', isFocused ? 'border-primary' : 'border-gray-300')}
                
            />
        </View>
    )
}

export default CustomInput