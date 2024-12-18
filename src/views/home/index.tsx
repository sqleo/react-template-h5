import { footerTab, home, hongbao, yiling } from "@/constants/image";
import { Footer, Image, Mask, SafeArea } from 'antd-mobile/2x';
import './index.modus.less';
import { useMemo, useState } from "react";
import classNames from "classnames";
import { useRequest } from "ahooks";
import ky from "ky";

const Home = () => {
    const [url, setUrl] = useState<string>('');
    const queryParams = new URLSearchParams(window.location.search); // 获取查询参数
    const id = queryParams.get('id');
    const [currentImage, setCurrentImage] = useState<string>(hongbao); // 新增状态来跟踪当前显示的图像
    const isMask = useMemo(() => {
        const goods = JSON.parse(localStorage.getItem('goodsId') || '[]');
        return (Array.isArray(goods) && !(goods.includes(id || ''))) ?? true;
    }, [id])
    const [visible, setVisible] = useState<boolean>(isMask)

    const getSchemeUrlRequest = async (query: string, expireType: number) => {
        const data = await ky.post('https://app.kkid.vip/kshop-appc/face/getSchemeUrl', {
            body: JSON.stringify({ query, expireType }),
        }).text();
        data && setUrl(data);
    };
    const handleMaskClick = () => {
        if (currentImage === yiling) {
            const goods = JSON.parse(localStorage.getItem('goodsId') || '[]');
            goods.push(id)
            localStorage.setItem('goodsId', JSON.stringify(goods))
            setVisible(false);
        } else {
            setCurrentImage(yiling);
        }
    };
    useRequest(getSchemeUrlRequest, {
        defaultParams: [id || '', 30],
    });
    return <div className="contenr">
        <Image src={home} alt="home" fit="contain" />
        <Footer label='没有更多了'></Footer>
        <div className="footer">
            <Image src={footerTab} alt="footerTab" fit="fill" onClick={() => {
                window.open(url);
            }}></Image>
        </div>
        <Mask visible={visible}>
            <div className="maskContent">
                <div className="box">
                    <Image src={currentImage} alt="hongbao" fit="contain" />
                    <div className={classNames('btn', currentImage === yiling && 'yiling')} onClick={handleMaskClick}></div>
                </div>
            </div>
        </Mask>
        <SafeArea position='bottom' />
    </div>;
};

export default Home;

