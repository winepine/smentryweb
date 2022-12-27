import { Box } from "@chakra-ui/react";
type colorCodesType = {
  success: string;
  danger: string;
};
const colorCodes: colorCodesType = {
  success: "green.100",
  danger: "red.100",
};
const hoverColorCodes: colorCodesType = {
  success: "green.300",
  danger: "red.200",
};
interface NotificationItemProps {
  notificationText: string;
  notificationStatus: keyof colorCodesType;
}
const NotificationItem = ({
  notificationText,
  notificationStatus,
}: NotificationItemProps) => {
  return (
    <Box
      border="1px solid rgba(100,100,100,0.2)"
      rounded="md"
      w="100%"
      bg={colorCodes[notificationStatus]}
      transitionDuration="200ms"
      _hover={{
        bg: hoverColorCodes[notificationStatus],
      }}
      color="gray.700"
      p={4}
    >
      {notificationText}
    </Box>
  );
};
export default NotificationItem;
