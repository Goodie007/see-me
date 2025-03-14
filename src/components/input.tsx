import React, { ReactNode } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  useTheme,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";

interface CustomInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: any;
  onChangeText?: any;
  isRequired?: boolean;
  extraText?: string;
  width?: any;
  height?: string | number | any;
  children?: any;
  isInvalid?: boolean;
  errorMessage?: string;
  ref?: any;
  path?: any;
  bgColor?: any;
  labelFontWeight?: any;
  labelFontSize?: any;
  labelFontStyle?: any;
  rightIcon?: any;
  fontSize?: any;
  fontWeight?: any;
  resize?: any;
  fontStyle?: any;
}

type RequireProperty<T, Prop extends keyof T> = T & { [key in Prop]-?: T[key] };
type RequireInputProps =
  | RequireProperty<CustomInputProps, "label">
  | RequireProperty<CustomInputProps, "placeholder">;

const CustomInput = ({
  name,
  label,
  placeholder = " ",
  type = "text",
  value,
  onChange,
  onChangeText,
  isRequired = true,
  extraText = "",
  children,
  width = "100%",
  height = "48px",
  errorMessage,
  isInvalid = false,
  ref,
  path,
  bgColor,
  labelFontSize,
  labelFontWeight,
  labelFontStyle,
  rightIcon,
  ...props
}: RequireInputProps) => {
  return (
    <Box width={width} height={height} {...props}>
      <FormLabel
        fontSize={labelFontSize}
        fontWeight={labelFontWeight}
        fontStyle={labelFontStyle}
        display={"flex"}
        mr={"5px"}
      >
        {label}
        {rightIcon}
      </FormLabel>
      <FormControl variant="floating" id={name} isInvalid={isInvalid}>
        <Input
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          color={"textColor.input"}
          bgColor={bgColor ? bgColor : "grey.inputBg"}
          height={height ? height : "56px"}
          width={width ? width : "100%"}
          // borderRadius={20}
          // paddingTop={2}
        />

        {extraText && <FormHelperText>{extraText}</FormHelperText>}

        {/* {children} */}
      </FormControl>
    </Box>
  );
};

type AuthInputType = {
  name: string;
  label?: string;
  type: string;
  isRequired?: boolean;
  isError?: boolean;
  placeholder?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  errorMessage?: string;
  helperText?: string;
  variant?: string;
  rightElementClick?: () => void;
  value?: string;
  onChange: any;
  height?: any;
  bgColor?: any;
};

function AuthCustomInput({
  name,
  label,
  type,
  variant,
  placeholder,
  leftElement,
  rightElement,
  isRequired,
  isError,
  errorMessage,
  helperText,
  rightElementClick,
  value,
  onChange,
  height,
  bgColor,
}: AuthInputType) {
  const theme = useTheme();
  return (
    <FormControl isInvalid={isError} isRequired={isRequired} fontSize={"sm"}>
      <FormLabel htmlFor={name} fontStyle="italic" color={theme.colors.text2}>
        {label}
      </FormLabel>
      <InputGroup>
        {leftElement && (
          <InputLeftElement mt="1">{leftElement}</InputLeftElement>
        )}
        <Input
          paddingY={6}
          borderColor={theme.colors.softGrey}
          fontSize={"sm"}
          isRequired={isRequired}
          id={name}
          bgColor={bgColor}
          type={type}
          placeholder={placeholder}
          height={height ? height : "56px"}
          variant={variant ? variant : "outline"}
          value={value}
          onChange={onChange}
        />
        {rightElement && (
          <InputRightElement onClick={rightElementClick} mt="1">
            {rightElement}
          </InputRightElement>
        )}
        {isError ? (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        ) : (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </InputGroup>
    </FormControl>
  );
}

const TextareaInput = ({
  name,
  label,
  placeholder = " ",
  type = "text",
  value,
  onChange,
  onChangeText,
  isRequired = true,
  extraText = "",
  children,
  width = "100%",
  height = "48px",
  errorMessage,
  isInvalid = false,
  ref,
  path,
  bgColor,
  labelFontSize,
  labelFontWeight,
  rightIcon,
  fontSize,
  fontStyle,
  fontWeight,
  resize,
  ...props
}: RequireInputProps) => {
  return (
    <Box width={width} height={height} {...props}>
      <FormLabel
        fontSize={labelFontSize}
        fontWeight={labelFontWeight}
        display={"flex"}
        mr={"5px"}
      >
        {label}
        {rightIcon}
      </FormLabel>
      <FormControl variant="floating" id={name} isInvalid={isInvalid}>
        <Textarea
          ref={ref}
          name={name}
          // type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          color={"textColor.input"}
          bgColor={bgColor ? bgColor : "grey.inputBg"}
          height={height ? height : "56px"}
          fontSize={fontSize ? fontSize : "12px"}
          // borderRadius={20}
          // paddingTop={2}
        />

        {extraText && <FormHelperText>{extraText}</FormHelperText>}

        {/* {children} */}
      </FormControl>
    </Box>
  );
};

export { CustomInput, AuthCustomInput, TextareaInput };
