import {Box, Text, Heading, Flex, Button, HStack, StackProps, Icon, Stack, } from "@chakra-ui/react"
import {Icons} from "./icon"

export const ListItem= (props: StackProps) => {
    const {children, ...rest} = props
    return(
        <HStack as="li" spacing="20px" {...rest}>
            <Icon as={Icons} w="22px" h="22px" />
            <Text>{children}</Text>
        </HStack>
    )
}

export default function Pricing() {
    return(
        <Box mb="50px" maxW="994px" margin="auto" mt="-250px" borderRadius="12px" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)">
            <Flex bg="white">
                <Box bg="#F0EAFB" p="60px">
                    <Text color="black" textAlign="center" fontSize="24px" fontWeight="800">
                        Premium PRO
                    </Text>
                    <Heading color="black" mt="24px" textAlign="center" fontSize="60px" fontWeight="800" lineHeight="60px">
                        $369
                    </Heading>
                    <Text color="black" mt="24px" textAlign="center">
                        billed just once
                    </Text>
                    <Button fontSize="16px" mt="24px" textAlign="center" color="White" bg="#805AD5" w="282px" h="51px" border="none" borderRadius="13px" _hover={{opacity: 0.75}}>
                        Get Started
                    </Button>
                </Box>
                <Box  alignSelf="center" color="black" fontSize="18px" ml="70px" bg="white">
                    <Text>
                    Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as="ul" spacing="20px" pt="24px">
                    <ListItem>International calling and messaging API</ListItem>
                    <ListItem>Additional phone numbers</ListItem>
                    <ListItem>Automated messages via Zapier</ListItem>
                    <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}
