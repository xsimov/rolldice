import React from "react";
import { Box, Icon, Link } from "@chakra-ui/core";

const Footer = () => (
  <Box
    position="absolute"
    bottom="0"
    flex="1"
    width="100%"
    padding={2}
    bg="black"
    color="white"
  >
    All credit for the images goes to{" "}
    <Link href="https://bitbucket.org/Cenix/dice_roller/src/master/" isExternal>
      Cenix's dice roller repo <Icon name="external-link" mx="2px" />
    </Link>
  </Box>
);

export { Footer };
