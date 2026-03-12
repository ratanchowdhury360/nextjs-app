import React from "react";

export default async function ServiceDetailsPage({ params }) {

    const data = [
        {
            id: "1",
            name: "Web Development",
            description: "We build modern and scalable websites using the latest technologies."
        },
        {
            id: "2",
            name: "UI/UX Design",
            description: "Beautiful and user-friendly design for web and mobile applications."
        },
        {
            id: "3",
            name: "SEO Optimization",
            description: "Improve your website ranking on search engines."
        },
        {
            id: "4",
            name: "Digital Marketing",
            description: "Grow your business with powerful online marketing strategies."
        },
        {
            id: "5",
            name: "App Development",
            description: "Build high performance mobile and web applications."
        }
    ];


    const { id } = await params;
    const singleService = data.find(service => service.id === id);

    if (singleService) {
 return (
        <div className="p-6">
            <p className="font-bold text-2xl mb-4">Service Details Page</p>
            <p className="text-lg">Service ID: {id}</p>
            <p className="text-lg">Service Name: {singleService.name}</p>
            <p className="text-gray-600">{singleService.description}</p>

        </div>
    );
    }
    else {
        return (
            <div className="p-6">
                <p className="font-bold text-2xl mb-4">Service Not Found</p>
                <p className="text-lg">No service found with ID: {id}</p>
            </div>
        );
    }


   
}