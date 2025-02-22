import React, {useEffect, useRef} from "react";
import "../styles/contacts-page.css";

const YandexMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null); // Track existing map instance

    useEffect(() => {
        if (!window.ymaps || !mapRef.current || mapInstance.current) return;

        window.ymaps.ready(() => {
            if (!mapRef.current) return; // Safety check

            // Create map only if it doesn't exist
            mapInstance.current = new window.ymaps.Map(mapRef.current, {
                center: [46.368, 48.04973],
                zoom: 15,
            });

            const placemark = new window.ymaps.Placemark(
                [46.368, 48.04973],
                {balloonContent: "Это мы!"}
            );


            mapInstance.current.geoObjects.add(placemark);
        });
    }, []);

    return <div ref={mapRef} className="map"/>;
};

export default YandexMap;
