import { Avatar, Text, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

export const SquareIcon = ({ icon, message, link }) => {
  const handleTap = () => {
    window.open(link, "_blank", "noreferrer");
  };
  return (
    <Tooltip
      content={message}
      placement={"bottom"}
      aria-roledescription='tooltip'
      aria-label={message}
      isDisabled={window.innerWidth < 768}>
      <motion.div
        aria-label={message}
        aria-roledescription="'button"
        whileHover={{
          opacity: 0.4,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        onTap={handleTap}>
        <Avatar
          css={{ cursor: "pointer" }}
          icon={icon({ size: 20, color: "white" })}
          aria-label={message}
          aria-placeholder={message}
          aria-valuetext={message}
          alt={message}
          size={"md"}
          zoomed
          squared
          bordered
        />
      </motion.div>
    </Tooltip>
  );
};
