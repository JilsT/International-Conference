import React from "react";

const Papers = () => {
    const papers = [
        '• Soft computing, Fuzzy Systems and ANN',
        '• Sensors and sensor networks',
        '• Security and authentication',
        '• Air Interface, Wavepropagation and Antennas',
        '• Mathematical Modeling and simulation',
        '• Data Mining, Web Technology and Ontology',
        '• Parallel and distributed systems',
        '• Microwave Theory and Techniques',
        '• Microwave Devices and Circuits',
        '• Adhoc Networks and wireless networks',
        '• IT and Management',
        '• RFIDs and applicatons',
        '• Embedded systems design and Hardware Implementation',
        '• Cloud computing, Green Computing',
        '• Vehicular Technology and networks',
        '• Image, speech and Signal Processing',
        '• Computer Vision and AI',
        '• Biometry and Bio-informatics',
        '• Information security and Network security',
        '• Simulation and Hardware implementation techniques',
        '• Control systems, Power Systems, transmission system',
        '• Big Data and Internet of Things',
        '• MIMO and MEMS',
        '• VLSI and SOCs and Special session on Clean Energy and sustainable Technology in VLSI',
    ];
    const listItems = papers.map(paper => <li>{paper}</li>);
    return (
        <section id="paper">
            <div className="home-heading">
                Call For Papers
            </div>
            <div className="home-content">
                The 14th IEEE International Conference on Communication Systems and Network Technologies 2025 is planned to be organised to bring together selected minds from various research communities, to have branstorming sessions on thier reserach outcomes selected to be published on international digital library. the participation is aimed from academia and industry working in all major areas and interdisciplinary areas of computational intelligence, Communication systems, computer networks and soft computing to share their experience, and exchange and cross-fertilize their ideas. CSNT 2025 will be conducted at Bhopal, India as flagship conference of IEEE Madhya Pradesh Section. Papers are invited on the following track but not limited to:
                <br /><br />
                <ul style={{ listStyleType: "circle" }}>{listItems}</ul>
            </div>
        </section>
    );
}

export default Papers;