import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostList = () => {

    return (
        <Stack p={4}>
            <Link to={"/post/1"}>
                <Box p={4} borderWidth={1} borderRadius="md">
                    <Heading size="md">Title</Heading>
                    <Text mt={2}>Description</Text>
                </Box>
            </Link>
            <Link to={"/post/2"}>
                <Box p={4} borderWidth={1} borderRadius="md">
                    <Heading size="md">Title</Heading>
                    <Text mt={2}>Description</Text>
                </Box>
            </Link>
        </Stack>
    );
};

export default PostList;