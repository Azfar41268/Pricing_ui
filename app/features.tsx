import {HStack, Text, Icon, StackProps, Box} from "@chakra-ui/react"
import { ElementType } from "react";
import { moneyBackIcon, hassleFreeIcon, noSubscriptionIcon } from "./icon";

interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing="24px">
            <Icon as={icon} boxSize="48px" />
            <Text textAlign="left" fontSize="18px" fontWeight="700" color="black">{children}</Text>
        </HStack>
    )
}

export function Features() {
    return(
        <Box maxW="1024px" m="auto" pt="70px" pb="50px">
            <HStack spacing="20px" px="48px">
                <Feature icon={moneyBackIcon}>30 days money back Guarantee</Feature>
                <Feature icon={hassleFreeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={noSubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
            </HStack>
        </Box>
    )
}