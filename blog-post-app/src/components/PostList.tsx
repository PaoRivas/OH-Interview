import { RootState } from "@/app/store";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { Post } from "@/features/postSlice";

const PostList = () => {
    const posts: Post[] = useSelector((state: RootState) => state.posts);

    return (
        <Stack p={4} textAlign="start" w={{ base: "100%", lg: "60%" }} mx="auto">
            {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>
                    <Box p={3} borderWidth={1} borderRadius="md" color="black">
                        <Heading size="xl" letterSpacing="tight">{post.title}</Heading>
                        <Text lineClamp="2" mt={2} fontWeight="normal" color="fg.muted">{post.description}</Text>
                    </Box>
                </Link>))}
        </Stack>
    );
};

export default PostList;