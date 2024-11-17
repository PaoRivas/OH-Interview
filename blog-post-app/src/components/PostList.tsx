import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostList = () => {

    return (
        <Stack p={4} textAlign="start" w={{ base: "100%", lg: "60%" }} mx="auto">
            <Link to={"/post/1"}>
                <Box p={3} borderWidth={1} borderRadius="md" color="black">
                    <Heading size="xl" letterSpacing="tight">Blog Post Title</Heading>
                    <Text lineClamp="2" mt={2} fontWeight="normal" color="fg.muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                </Box>
            </Link>
            <Link to={"/post/2"}>
                <Box p={3} borderWidth={1} borderRadius="md" color="black">
                    <Heading size="xl" letterSpacing="tight">Blog Post Title</Heading>
                    <Text lineClamp="2" mt={2} fontWeight="normal" color="fg.muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                </Box>
            </Link>
        </Stack>
    );
};

export default PostList;