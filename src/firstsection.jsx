import { Col, Row, Image, Typography } from "antd"
const { Title, Paragraph } = Typography;
export default function FirstSection() {
    return (
        <div>

            <Row >
                <Col className="controlsCol" xs={24} >
                    <Typography>
                        <Title className="textT">
                            Game Controls
                        </Title>
                        <Paragraph className="textp">
                            in the next section we will discuss simple and important controls
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
            <Row className="rows">
                <Col className="imageCol controlsCol" xs={24} xl={12}>
                    <Image src="./keyboard.png" />
                </Col>
                <Col className="controlsCol" xs={24} xl={12}>
                    <Typography>
                        <Title className="textT">
                            Car Controls
                        </Title>
                        <Paragraph className="textp">
                            To control the car, the user can utilize the WASD keys. Pressing 'W' accelerates the car forward, allowing it to move along its current heading. While in motion, the user can adjust the car's direction by pressing 'A' or 'D' to rotate it left or right, respectively. In case the user needs to readjust their position, they can press the 'S' key to move the car in reverse. This additional functionality enables the user to effortlessly maneuver the vehicle in both forward and backward directions, enhancing their control and versatility while driving.
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
            <Row className="rows">
                <Col className="controlsCol" xs={{ span: 24, order: 2 }} xl={{ span: 12, order: 1 }}>
                    <Typography>
                        <Title className="textT">
                            In Game Chat
                        </Title>
                        <Paragraph className="textp">
                            During gameplay or while inside the lobby, players can effortlessly communicate with each other using the in-game chat feature, designed to enhance convenience and maintain gameplay immersion. By simply pressing the Left Ctrl button, players can enter the input field and begin typing their message. Once they have composed their message, they can press the Left Ctrl button again to submit it. This intuitive approach eliminates the need for mouse interaction, allowing players to chat seamlessly and efficiently without interrupting their gameplay experience. The streamlined chat system fosters effective communication and encourages social interaction among players, enriching the overall gaming experience.
                        </Paragraph>
                    </Typography>
                </Col>
                <Col className="imageCol controlsCol" xs={{ span: 24, order: 1 }} xl={{ span: 12, order: 2 }}>
                    <Image src="./ctrl.png" />
                </Col>
            </Row>

        </div>
    )
} 