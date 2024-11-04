import { home } from "@/constants/image";
import { Image } from 'antd-mobile';
import './index.modus.less';

const Home = () => {
    return <div>
        <Image src={home} alt="home" fit="contain" />
    </div>;
};

export default Home;

