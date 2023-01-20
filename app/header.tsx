import { Box, Text, Heading } from "@chakra-ui/react"

export default function Header() {
    return(
        <Box pb="112px" as="section">
            <Box color="#F7FAFC" bg="#6B46C1" w="1920px" h="397px"  >
                <Heading margin="auto" position="absolute" textAlign="center" fontWeight="800" fontSize="48px" ml="620px" mt="88.45px" h="62.31px" w="751px" fontFamily="Inter">
                Simple pricing for your business
                </Heading>
                <Text margin="auto" position="absolute" textAlign="center" w="604px" h="32.16px" fontWeight="500" fontSize="24px" mt="166.24px" ml="690px" opacity="0.84" fontFamily="Inter">
                Plans that are carefully crafted to suit your business.
                </Text>
            </Box>
        </Box>
    )
}