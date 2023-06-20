import { Button, Col, Row, Image, Typography, Statistic } from "antd"
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import { data } from "./steps"

const { Title, Paragraph } = Typography;
import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect } from "react";

export default function ProjectDSection() {
    const [player, setPlayers] = useState(0);
    const [rooms, setRooms] = useState(0);
    useEffect(() => {
        fetch("https://racing-cars-middleware.onrender.com/rooms/")
            .then((response) => response.json())
            .then((data) => setRooms(data.rooms))
    }, []);
    useEffect(() => {
        fetch("https://racing-cars-middleware.onrender.com/players/")
            .then((response) => response.json())
            .then((data) => setPlayers(data.players))
    }, []);
    useEffect(() => {
        fetch("https://racing-cars-middleware.onrender.com/views/")
    }, []);
    return (
        <div>

            <Row gutter={16}>
                <Col className="stat" xs={24} sm={24} lg={12}>
                    <Statistic title="Rooms Created" value={player} />
                </Col>
                <Col className="stat" xs={24} sm={24} lg={12}>
                    <Statistic title="Players Joined" value={rooms} />
                </Col>

            </Row>
            <Row className="rows">

                <Col>
                    <Typography>
                        <Title className="textT">
                            Project Description
                        </Title>
                        <Paragraph className="textp">
                            In our Distributed Systems course project,
                            we created a game using sockets and deployed it to the cloud,
                            with the goal of supporting multiple independent agents competing
                            for shared resources and making real-time updates to a distributed
                            state spread across multiple client or server nodes, ensuring system robustness,
                            uninterrupted operation in case of node failure, and the ability to recover node state after a crash.
                        </Paragraph>
                    </Typography>
                </Col>
                <Col className="imageCol controlsCol" xs={24} >
                    <Image src="./Node_Distribution.svg" />
                </Col>
                <Col xs={24} >
                    <Typography>
                        <Title className="textT">
                            Distributed System
                        </Title>
                        <Paragraph className="textp">
                            In the figure above we show the overview of our system and how every node is distributed on different nodes and how they communicate together
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
            <Col>
                <Typography>
                    <Title className="textT">
                        Development Process
                    </Title>
                </Typography>
            </Col>
            <VerticalTimeline
                layout='2-columns'
            >
                {data.map((data) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={data.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h4 className="vertical-timeline-element-title">{data.title}</h4>
                        <h5 className="vertical-timeline-element-subtitle">{data.role}</h5>
                        <p>
                            {data.des}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <hr />
        </div>
    )
}

