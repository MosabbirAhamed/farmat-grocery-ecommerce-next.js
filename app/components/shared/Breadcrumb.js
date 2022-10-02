import Link from "next/link"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Breadcrumb = (  ) => {

    const router = useRouter();
    const [items, setItems] = useState([]);

    const generateBreadcrumbs = () => {

        const asPathWithoutQuery = router.asPath.split("?")[0];
        const asPathNestedRouters = asPathWithoutQuery.split("/").filter(v => v.length > 0);
        const crumbList = asPathNestedRouters.map((subpath, idx) =>{
            const href = asPathNestedRouters.slice(0, idx + 1 ).join("/");
            const lable = subpath ;
            return {href , lable}
        })
        return [{href: "/", lable:"Home"}, ...crumbList]
    }

    useEffect(() => {
        setItems(generateBreadcrumbs())
    }, [router]);


    return (
        <div className="text-color mb-5">
            {items.map((item, index) => (
                <span key={index}>
                    {items.length - 1 !== index ? (
                        <>
                            <Link href={item.href}><a href={item.href}>{item.lable}</a></Link>
                            <span className="mx-2">/</span>
                        </>
                    ) : (
                        <span className='text-title'>{item.lable}</span>
                    )}
                </span>
            ))}
        </div>
    )
}

export default Breadcrumb