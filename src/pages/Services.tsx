//src/pages/Services.tsx
const Services: React.FC = () => {
    return(
        <div>
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-gray-700">
                We offer a wide range of services to meet your needs.
            </p>
            <ul className="list-disc list-inside mt-4">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>SEO Optimization</li>
            </ul>
        </div>
    )
}
export default Services;