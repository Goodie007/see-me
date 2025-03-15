import { Box, Text } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";
// import React from "react";

interface ButtonProps {
  loading?: boolean;
  onClick: () => void;
  disable?: boolean;
  label: string;
  width?: string | number | object;
  height?: string | number | object;
  borderWidth?: string | number | object;
  bgColor?: string;
  color?: string;
  borderRadius?: string | number | object;
  padding?: string | number | object;
  paddingLeft?: string | number | object;
  paddingRight?: string | number | object;
  paddingTop?: string | number | object;
  paddingBottom?: string | number | object;
  paddingX?: string | number | object;
  paddingY?: string | number | object;
  fontWeight?: string | number | object;
  fontSize?: string | number | object;
  alignItems?: string | object;
  alignSelf?: string | object;
  icon?: React.ReactNode;
  flexDirection?: any;
  display?: any;
  justifyContent?: any;
  borderColor?: string | object;
  textAlign?: any;
  rowGap?: string | number | object;
  columnGap?: string | number | object;
  textColor?: string | object;
  paddingLeftText?: string | number;
  children?: any;
  _hover?: any;
  leftIcon? : any
  isDisabled?: any
}

export default function Button({
  loading,
  onClick,
  disable,
  label,
  width,
  height,
  borderWidth,
  bgColor,
  color,
  borderRadius,
  padding,
  paddingLeft,
  paddingBottom,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  fontWeight,
  fontSize,
  alignItems,
  alignSelf,
  icon,
  flexDirection,
  display,
  justifyContent,
  borderColor,
  textAlign,
  rowGap,
  columnGap,
  textColor,
  paddingLeftText,
  children,
  _hover,
  isDisabled = false,
  leftIcon,
}: ButtonProps) {
  return (
    <Box
      width={width}
      height={height}
      borderWidth={borderWidth}
      bgColor={bgColor}
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      paddingLeft={paddingLeft}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      onClick={onClick}
      paddingY={paddingY}
      paddingX={paddingX}
      fontWeight={fontWeight}
      fontSize={fontSize}
      alignItems={alignItems ? alignItems :  'center'}
      alignSelf={alignSelf}
      flexDirection={flexDirection}
      display={display ? display : 'flex'}
      justifyContent={justifyContent ? justifyContent : 'center'}
      borderColor={borderColor}
      textAlign={textAlign}
      columnGap={columnGap}
      rowGap={rowGap}
      textColor={textColor}
      _hover={_hover}
      disabled={isDisabled}
      
      
      as="button"
    >
      {icon}
      {loading ? (
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          //paddingX={{base: '140px', md: '240px', lg: '150px'}}
          // paddingBottom={"20px"}
          //paddingLeft={'45%'}
          alignContent={"center"}
          
        >
          {" "}
          <ClipLoader size={21} />{" "}
        </Box>
      ) : children ? (
        children
      ) : (
        <Text
          textAlign={textAlign}
          paddingLeft={paddingLeftText}
          fontSize={fontSize} // Add fontSize here
          fontWeight={fontWeight}
          // style={{ fontSize: fontSize, fontWeight: fontWeight }}
        >
          {label}
        </Text>
      )}
    </Box>
  );
}
