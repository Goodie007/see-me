import { Box, Button, Flex, Grid, IconButton } from "@chakra-ui/react";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaPhone,
} from "react-icons/fa";
import { useState } from "react";

export default function VideoCallScreen() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);

  return (
    <Flex direction="column" width="100vw" height="100vh" bg="gray.900">
      {/* Video Grid */}
      <Grid flex="1"  gap={4} p={4}>
        {/* Local Video */}
        <Box bg="black" borderRadius="md" width="100%" height="100%">
          {/* Placeholder for Video Element */}
        </Box>

      </Grid>

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
  );
}

// import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
// import {
//   FaMicrophone,
//   FaMicrophoneSlash,
//   FaVideo,
//   FaVideoSlash,
//   FaPhone,
// } from "react-icons/fa";
// import { useState, useRef, useEffect } from "react";
// import Draggable from "react-draggable"; // Ensure you install this: npm install react-draggable

// export default function VideoCallScreen() {
//   const [isMuted, setIsMuted] = useState(false);
//   const [isCameraOn, setIsCameraOn] = useState(true);
//   const localVideoRef = useRef<HTMLVideoElement>(null);
//   const remoteVideoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     // Mock video stream setup (Replace with WebRTC logic)
//     if (localVideoRef.current) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true, audio: true })
//         .then((stream) => {
//           localVideoRef.current!.srcObject = stream;
//         })
//         .catch((err) => console.error("Error accessing webcam:", err));
//     }
//   }, []);

//   return (
//     <Flex
//       direction="column"
//       width="100vw"
//       height="100vh"
//       bg="gray.900"
//       position="relative"
//     >
//       {/* Recipient Video (Large) */}
//       <Box flex="1" width="100%" height="100%" bg="black">
//         <video
//           ref={remoteVideoRef}
//           width="100%"
//           height="100%"
//           style={{ objectFit: "cover" }}
//           autoPlay
//         />
//       </Box>

//       {/* Movable Caller Video (Small) */}
//       <Draggable bounds="parent">
//         <Box
//           position="absolute"
//           bottom="20px"
//           right="20px"
//           width="180px"
//           height="120px"
//           bg="gray.700"
//           borderRadius="md"
//           overflow="hidden"
//           cursor="grab"
//         >
//           <video
//             ref={localVideoRef}
//             width="100%"
//             height="100%"
//             style={{ objectFit: "cover" }}
//             autoPlay
//             muted
//           />
//         </Box>
//       </Draggable>

//       {/* Control Bar */}
//       <Flex justify="center" gap={4} p={4} bg="gray.800">
//         <IconButton
//           icon={isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
//           onClick={() => setIsMuted(!isMuted)}
//           aria-label="Toggle Mute"
//         />
//         <IconButton
//           icon={isCameraOn ? <FaVideo /> : <FaVideoSlash />}
//           onClick={() => setIsCameraOn(!isCameraOn)}
//           aria-label="Toggle Camera"
//         />
//         <Button colorScheme="red" leftIcon={<FaPhone />}>
//           End Call
//         </Button>
//       </Flex>
//     </Flex>
//   );
// }
