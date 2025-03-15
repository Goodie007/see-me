import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  IconButton,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaPhone,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Navbar from "../components/navbar";
import Layout from "../components/layout";

export default function VideoCallScreen() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [position, setPosition] = useState({ x: 20, y: 20 }); // Initial position
  const [dragging, setDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam:", err));
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <>
      {isSmallScreen ? (
        <Box>
          <Flex direction="column" width="100vw" height="100vh" bg="gray.900">
            <Grid
              flex="1"
              gap={4}
              p={4}
              minH={"0"}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {isCameraOn === false ? (
                <Box
                  bg="black"
                  borderRadius="md"
                  width={{ base: "100%", md: "70%" }}
                  height="80vh"
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                ></Box>
              ) : (
                <Box
                  bg="black"
                  borderRadius="md"
                  width={{ base: "100%", md: "70%" }}
                  height="94%"
                  //maxHeight={{ base: "100vh", md: "100vh" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <video
                    ref={videoRef}
                    width="100%"
                    height={"100%"}
                    style={{
                      objectFit: "fill",
                      minHeight: "80vh",
                      borderRadius: "8px",
                    }}
                    autoPlay
                    muted
                  />
                </Box>
              )}
            </Grid>

            {/* <Draggable bounds="parent"> */}
            <Box
              ref={dragRef}
              position="absolute"
              left={`${position.x}px`}
              top={`${position.y}px`}
              width="180px"
              height="120px"
              bg="gray.700"
              borderRadius="md"
              overflow="hidden"
              cursor="grab"
              onMouseDown={handleMouseDown}
            >
              {/* <video
          ref={videoRef}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          autoPlay
          muted
        /> */}
            </Box>
            {/* </Draggable>  */}

            {/* Control Bar */}
            <Flex justify="center" gap={4} p={4} bg="gray.800">
              <IconButton
                icon={isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
                onClick={() => setIsMuted(!isMuted)}
                aria-label="Toggle Mute"
              />
              <IconButton
                icon={isCameraOn ? <FaVideo /> : <FaVideoSlash />}
                onClick={() => setIsCameraOn(!isCameraOn)}
                aria-label="Toggle Camera"
              />
              <Button colorScheme="red" leftIcon={<FaPhone />}>
                End Call
              </Button>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Flex direction="column" width="100vw" height="100vh" bg="gray.900">
          <Grid
            flex="1"
            gap={4}
            p={4}
            minH={"0"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {isCameraOn === false ? (
              <Box
                bg="black"
                borderRadius="md"
                width={{ base: "100%", md: "70%" }}
                height="77vh"
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              ></Box>
            ) : (
              <Box
                bg="black"
                borderRadius="md"
                width={{ base: "100%", md: "70%" }}
                //height="100%"
                maxHeight={{ base: "100vh", md: "100vh" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <video
                  ref={videoRef}
                  width="100%"
                  height={"auto"}
                  style={{
                    objectFit: "cover",
                    maxHeight: "80vh",
                    borderRadius: "8px",
                  }}
                  autoPlay
                  muted
                />
              </Box>
            )}
          </Grid>

          {/* <Draggable bounds="parent"> */}
          <Box
            ref={dragRef}
            position="absolute"
            left={`${position.x}px`}
            top={`${position.y}px`}
            width="180px"
            height="120px"
            bg="gray.700"
            borderRadius="md"
            overflow="hidden"
            cursor="grab"
            onMouseDown={handleMouseDown}
          >
            {/* <video
          ref={videoRef}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          autoPlay
          muted
        /> */}
          </Box>
          {/* </Draggable>  */}

          {/* Control Bar */}
          <Flex justify="center" gap={4} p={4} bg="gray.800">
            <IconButton
              icon={isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
              onClick={() => setIsMuted(!isMuted)}
              aria-label="Toggle Mute"
            />
            <IconButton
              icon={isCameraOn ? <FaVideo /> : <FaVideoSlash />}
              onClick={() => setIsCameraOn(!isCameraOn)}
              aria-label="Toggle Camera"
            />
            <Button colorScheme="red" leftIcon={<FaPhone />}>
              End Call
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
}
