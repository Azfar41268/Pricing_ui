import {HStack, Text, Icon, StackProps, Box, Flex} from "@chakra-ui/react"
import { ElementType } from "react";
import { moneyBackIcon, hassleFreeIcon, noSubscriptionIcon } from "./icon";

interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing="1.5rem">
            <Icon as={icon} boxSize="3rem" />
            <Text textAlign="left" fontSize="1.125rem" fontWeight="bold" color="black">{children}</Text>
        </HStack>
    )
}

export function Features() {
    return(
        <Flex direction="row" maxW="64rem" m="auto" pt="4.375rem" pb="3.125rem">
            <HStack spacing="1.25rem" px="3rem">
                <Feature icon={moneyBackIcon}>30 days money back Guarantee</Feature>
                <Feature icon={hassleFreeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={noSubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
            </HStack>
        </Flex>
    )
}