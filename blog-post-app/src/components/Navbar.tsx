import { Link, useLocation } from "react-router-dom"
import {
    BreadcrumbCurrentLink,
    BreadcrumbLink,
    BreadcrumbRoot,
} from "@/components/ui/breadcrumb"
import { Box, Heading } from "@chakra-ui/react";

const Navbar = () => {
    const location = useLocation();

    const isPostDetailsPage = location.pathname.startsWith('/post/');
    const renderPostsLink = () => {
        return isPostDetailsPage ? (
            <BreadcrumbLink fontSize="md">
                <Link to={"/"}>Posts</Link>
            </BreadcrumbLink>
        ) : (
            <BreadcrumbCurrentLink fontSize="md">Posts</BreadcrumbCurrentLink>
        );
    };
    return (
        <Box
            as="nav"
            bg="gray.100"
            p={4}
            boxShadow="sm"
        >
            <Heading as="h2" textAlign="left">Blog Posts</Heading>
            <BreadcrumbRoot pt={4}>
                {renderPostsLink()}
                {isPostDetailsPage && (
                    <BreadcrumbCurrentLink fontSize="md">PostDetails</BreadcrumbCurrentLink>
                )}
            </BreadcrumbRoot>
        </Box>
    )
}

export default Navbar