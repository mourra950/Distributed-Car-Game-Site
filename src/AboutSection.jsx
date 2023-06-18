import { Image } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
export default function AboutSection() {
    return (
        <div>
            <Image src="./keyboard.png" />
            <Image src="./ctrl.png" />
            <Avatar size={256} src='face3.png' />
            <Avatar size={256} src='transformed.png' />
        </div>
    )
} 