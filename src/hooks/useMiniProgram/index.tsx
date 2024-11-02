import { useCallback, useEffect, useState } from "react";

export const useWeappLauncher = () => {
    const [isWeixin, setIsWeixin] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        const isWXWork = ua.includes('wxwork');
        setIsWeixin(!isWXWork && ua.includes('micromessenger'));
        setIsDesktop(!/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile/i.test(navigator.userAgent));

        if (isWeixin) {
            (window as any).wx.config({
                appId: 'wxdb00352ada513a93',
                timestamp: 1000,
                nonceStr: 'nonceStr',
                signature: 'signature',
                jsApiList: ['chooseImage'],
                openTagList: ['wx-open-launch-weapp'],
            });
        }
    }, [isWeixin]);

    const openWeapp = useCallback(() => {
        alert('请在微信中打开以启动小程序');
    }, []);

    return { isWeixin, isDesktop, openWeapp };
}
