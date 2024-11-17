import { Link, useLocation } from "react-router-dom"
import {
    BreadcrumbCurrentLink,
    BreadcrumbLink,
    BreadcrumbRoot,
} from "@/components/ui/breadcrumb"

export const Navbar = () => {
    const location = useLocation();

    const isPostDetailsPage = location.pathname.startsWith('/post/');
    return (
        <BreadcrumbRoot>
            <BreadcrumbLink><Link to={"/"}>Posts</Link></BreadcrumbLink>
            {isPostDetailsPage && <BreadcrumbCurrentLink>PostDetails</BreadcrumbCurrentLink>}
        </BreadcrumbRoot>
    )
}