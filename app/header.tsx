import { Box, Text, Heading } from "@chakra-ui/react"

export default function Header() {
    return(
        <Box pb="7rem" as="section">
            <Box color="gray.400" bg="#805AD5" pt="5.625rem" pb="12.375rem" px="2rem" textAlign={["left", "left", "center"]}>
                <Heading fontWeight="extrabold" fontSize={["30px", "30px", "48px"]}>
                Simple pricing for your business
                </Heading>
                <Text fontWeight="medium" fontSize={["18px", "18px", "24px"]} opacity="0.9" pt="1rem">
                Plans that are carefully crafted to suit your business.
                </Text>
            </Box>
        </Box>
    )
}