import {
    BreadcrumbCurrentLink,
    BreadcrumbLink,
    BreadcrumbRoot,
} from "@/components/ui/breadcrumb"

export const Navbar = () => {
    return (
        <BreadcrumbRoot>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
            <BreadcrumbCurrentLink>Props</BreadcrumbCurrentLink>
        </BreadcrumbRoot>
    )
}