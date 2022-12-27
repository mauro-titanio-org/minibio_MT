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
      isDisabled={window.innerWidth < 768}>
      <motion.div
        whileHover={{
          opacity: 0.4,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        onTap={handleTap}>
        <Avatar
          css={{ cursor: "pointer" }}
          icon={icon({ size: 16, color: "white" })}
          // css={{ size: "$24" }}
          // color='gradient'
          size={"sm"}
          zoomed
          squared
          bordered
        />
      </motion.div>
    </Tooltip>
  );
};
