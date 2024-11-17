import { RootState } from '@/app/store';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const PostDetails = () => {
    const { id } = useParams<{ id: string }>();
    const post = useSelector((state: RootState) =>
        state.posts.find((p) => p.id === Number(id))
    );
    if (!post) return <Text>Post not found</Text>;
    return (
        <Box p={4}>
            <Heading mt={4}>{post.title}</Heading>
            <Text mt={4} fontWeight="bold">Author: {post.author}</Text>
            <Text>{formatDate(post.date)}</Text>
            <Text mt={3} w={{ base: "100%", lg: "60%" }} mx="auto">{post.content}</Text>
        </Box>
    );
};

export default PostDetails;
