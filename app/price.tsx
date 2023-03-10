import {Box, Text, Heading, Flex, Button, HStack, StackProps, Icon, Stack, } from "@chakra-ui/react"
import {Icons} from "./icon"

export const ListItem = (props: StackProps) => {
    const {children, ...rest} = props
    return(
        <HStack as="li" spacing="1.25rem" {...rest} alignItems="start">
            <Icon as={Icons} w="1.375rem" h="1.375rem" />
            <Text textAlign={["left", "left", "center"]}>{children}</Text>
        </HStack>
    )
}

export default function Pricing() {
    return(
        <Box mx="24px" as="section">
            <Box textAlign="center" as="section" maxW="62.125rem" margin="auto" mt="-15.625rem" borderRadius="0.75rem" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)">
                <Flex bg="white" direction={["column", "column", "row"]}>
                    <Box bg="#F0EAFB" p="3.75rem">
                        <Text color="black" fontSize="1.5rem" fontWeight="extrabold">
                            Premium PRO
                        </Text>
                        <Heading as="h3" color="black" mt="1.5rem" fontSize={["48px", "48px", "60px"]}>
                            $369
                        </Heading>
                        <Text color="black" mt="1.5rem">
                            billed just once
                        </Text>
                        <Button fontSize="1rem" mt="1.5rem" color="White" bg="#805AD5" w="17.625rem" h="3.1875rem" border="none" borderRadius="0.8125rem" _hover={{opacity: 0.75}}>
                            Get Started
                        </Button>
                    </Box>
                    <Box color="black" fontSize="1.125rem" bg="white" ml="35px" mt={["30px", "30px", "65px"]}>
                        <Text textAlign="left">
                        Access these features when you get this pricing package for your business.
                        </Text>
                        <Stack as="ul" spacing="1.25rem" pt="1.5rem">
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
