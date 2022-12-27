import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "../components/home/Header";
import NotificationSection from "../components/home/NotificationsSection";
import VerticalDivider from "../components/home/VerticalDivider";
import RightHalf from "../components/home/RightHalf";

export default function Home() {
  return (
    <Container minW="100%" p={0} m={0}>
      <Header />
      <Divider />

      <HStack bg="white" align="start" minH="100%">
        <NotificationSection />
        <VerticalDivider />
        <RightHalf />
      </HStack>
    </Container>
  );
}
